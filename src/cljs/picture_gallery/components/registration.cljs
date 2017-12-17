(ns picture-gallery.components.registration
  (:require [reagent.core :refer [atom]]
            [picture-gallery.components.common :as c]
            [ajax.core :as ajax]
            [reagent.session :as session]
            [picture-gallery.validation :refer [registration-errors]]))

(defn delete-account! []
  (ajax/POST "/delete-account"
             {:handler #(do
                          (session/remove! :identity)
                          (session/put! :page :home))}))

(defn delete-account-modal []
  (fn []
    [c/modal
     [:h2.alert.alert-danger "Delete Account!"]
     [:P "Are you sure you wish to delete the account and associated gallery?"]
     [:div
      [:button.btn.btn-primary
       {:on-click (fn []
                    (delete-account!)
                    (session/remove! :modal))
        :margin-right "10px"}
       "Delete"]
      [:button.btn.btn-danger
       {:on-click (fn [] (session/remove! :modal))}
       "Cancel"]]]))

(defn cljs-register! [fields errors]
  (reset! errors (registration-errors @fields))
  (if-not @errors
    (ajax/POST "/register"
               {:params @fields
                :handler
                #(do
                   (session/put! :identity (:id @fields))
                   (reset! fields {})
                   (session/remove! :modal))
                :error-handler
                #(reset!
                  errors
                  {:server-error (get-in %  [:response :message])})})))

(defn registration-button []
  [:a.btn
   {:on-click #(session/put! :modal registration-form)}
   "register"])

(defn registration-form []
  (let [fields (atom {})
        error (atom nil)]
    (fn []
      [c/modal
       [:div "Picture Gallery Registration"]
       [:div
        [:div.well.well-sm
         [:strong "* required field"]]
        [c/text-input "name" :id "enter a user name" fields]
        (when-let [error (first (:id @error))])
        [c/password-input "password" :pass "enter a password" fields]
        [c/password-input
         "password-confirm" :pass-confirm "re-enter a password" fields]
        (when-let [error (first (:pass @error))]
          [:div.alert.alert-danger error])
        (when-let [error (:server-error @error)]
          [:div.alert.alert-danger error])]
       [:div
        [:button.btn.btn-primary
         {:on-click #(cljs-register! fields error)} "Register"]
        [:button.btn.btn-danger
         {:on-click #(session/remove! :modal)}
         "Cancel"]]])))

