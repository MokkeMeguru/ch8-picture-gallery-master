(ns picture-gallery.components.upload
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.events :as gev]
            [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [picture-gallery.components.common :as c]
            [cljs.core.async :refer [<! >! put! timeout chan]]
            [ajax.core :as ajax])
  (:import goog.net.IframeIo
           goog.net.EventType
           [goog.events EventType]))

(defn upload-file! [upload-form-id status]
  (reset! status nil)
  (let [io (IframeIo.)]
    (gev/listen
     io goog.events.EventType.SUCCESS
     #(reset! status [:div.alert-success "file uploaded successfully"]))
    (gev/listen
     io goog.events.EventType.ERROR
     #(reset! status [:div.alert-danger "failed to upload the file"]))
    (.setErrorChecker io #(= "error" (.getResponseText io)))
    (.sendFromForm
     io
     (.getElementById js/document upload-form-id)
     "/upload")
    (go
      (<! (timeout 1000))
      (session/remove! :modal))
    ))


(defn upload-form []
  (let [status (atom nil)
        form-id "upload-form"]
    (fn []
      [c/modal
       [:div "Upload File"]
       [:div
        (when @status
          @status)
        [:form {:id form-id
                :enc-type "multipart/form-data"
                :method "POST"}
         [:label {:for "file"} "select an image for upload"]
         [:p]
         [:input {:id "file" :name "file" :type "file"}]]
        [:p]
        [:button.btn.btn-primary
         {:on-click #(upload-file! form-id status)
          :style {:margin-right 10}}
         "Upload"]
        [:button.btn.btn-primary
         {:on-click #(session/remove! :modal)}
         "Cancel"]]])))

(defn upload-button []
  [:a.btn
   {:on-click #(session/put! :modal upload-form)}
   "upload image"])
