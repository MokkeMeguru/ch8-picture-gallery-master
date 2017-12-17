(ns picture-gallery.core
  (:require [reagent.core :as r :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [picture-gallery.ajax :refer [load-interceptors!]]
            [ajax.core :refer [GET POST]]
            [picture-gallery.components.registration :as reg]
            [picture-gallery.components.login :as l]
            [picture-gallery.components.upload :as u]
            [picture-gallery.components.gallery :as g]
            )
  (:import goog.History))

(defn galleries [gallery-links]
  [:div.text-xs-center
   (for [row (partition-all 3 gallery-links)]
     ^{:key row}
     [:div.row
      (for [{:keys [owner name]} row]
        ^{:key (str owner name)}
        [:div.col-sm-4
         [:a {:href (str "#/gallery/" owner)}
          [:img {:src (str js/context "/gallery/" owner "/" name)}]]])])])

(defn list-gallaries! []
  (GET "/list-galleries"
       {:handler #(session/put! :gallery-links %)}))

(defn modal []
  (when-let [session-modal (session/get :modal)]
    [session-modal]))

(defn account-actions [id]
  (let [expanded? (atom false)]
    (fn []
      [:div.dropdown
       {:class (when @expanded? "open")
        :on-click #(swap! expanded? not)}
       [:button.btn.btn-secondary.dropdown-toggle
        {:type :button}
        [:span.glyphicon.glyphicon-user] " " id [:span.caret]]
       [:div.dropdown-menu.user-actions
        [:a.dropdown-item.btn
         {:on-click
          #(session/put!
            :modal reg/delete-account-modal)}
         "delete account"]
        [:a.dropdown-item.btn
         {:on-click
          #(POST
            "/logout"
            {:handler (fn [] (session/remove! :identity))})}
         "sign out"]]])))

(defn user-menu []
  (if-let [id (session/get :identity)]
    [:ul.nav.navbar-nav.pull-xs-right
     [:li.nav-item
      [u/upload-button]]
     [:li.nav-item
      [account-actions id]]] ;; changed! [] -> ()
    [:ul.nav.navbar-nav.pull-xs-right
     [:li.nav-item [l/login-button]]
     [:li.nav-item [reg/registration-button]]]))

(defn nav-link [uri title page collapsed?]
  [:ul.nav.navbar-nav>a.navbar-brand
   {:class (when (= page (session/get :page)) "active")
    :href uri
    :on-click #(reset! collapsed? true)}
   title])

(defn navbar []
  (let [collapsed? (r/atom true)]
    (fn []
      [:nav.navbar.navbar-light.bg-faded
       [:button.navbar-toggler.hidden-sm-up
        {:on-click #(swap! collapsed? not)} "☰"]
       [:div.collapse.navbar-toggleable-xs
        (when-not @collapsed? {:class "in"})
        [:a.navbar-brand {:href "#/"} "myapp"]
        [:ul.nav.navbar-nav
         [nav-link "#/" "Home" :home collapsed?]
         [nav-link "#/about" "About" :about collapsed?]]]
       [user-menu]])))

(defn about-page []
  [:div.container
   [:div.row
    [:div.col-md-12
     "this is the story of picture-gallery... work in progress"]]])

(defn home-page []
  (list-gallaries!)
  (fn []
    [:div.container
     [:div.row
      [:div.col-md-12>h2 "Available Galleries"]]
     (when-let [gallery-links (session/get :gallery-links)]
       [:div.row>div.col-md-12
        (galleries gallery-links)] ;; change here [] -> ()
       )
     ]))

(def pages
  {:home #'home-page
   :gallery #'g/gallery-page
   :about #'about-page})

(defn page []
  [:div
   [modal]
   [(pages (session/get :page))]])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (session/put! :page :home))

(secretary/defroute "/about" []
  (session/put! :page :about))

(secretary/defroute "/gallery/:owner" [owner]
  (g/fetch-gallery-thumbs! owner)
  (session/put! :page :gallery))
;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
        (events/listen
          HistoryEventType/NAVIGATE
          (fn [event]
              (secretary/dispatch! (.-token event))))
        (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn fetch-docs! []
  (GET (str js/context "/docs") {:handler #(session/put! :docs %)}))

(defn mount-components []
  (r/render [#'navbar] (.getElementById js/document "navbar"))
  (r/render [#'page] (.getElementById js/document "app")))

(defn init! []
  (load-interceptors!)
  ;; (fetch-docs!)
  (hook-browser-navigation!)
  (session/put! :identity js/identity)
  (mount-components))