(ns picture-gallery.routes.services.gallery
  (:require [picture-gallery.layout :refer [error-page]]
            [picture-gallery.db.core :as db]
            [ring.util.http-response :refer :all])
  (:import java.io.ByteArrayInputStream))


(defn get-image [name]
  (if-let [{:keys [type data]} (first (db/get-image {:name name}))]
    (-> (ByteArrayInputStream. data)
        (ok)
        (content-type type))
    (error-page {:status 404
                 :title "page not found"})))

(defn list-thumbnails [owner]
  (ok (db/list-thumbnails {:owner owner})))

(defn list-galleries []
  (ok (db/select-gallery-previews)))

(defn delete-image! [owner thumb-name image-name]
  (db/delete-file! {:owner owner :name thumb-name})
  (db/delete-file! {:owner owner :name image-name})
  (ok {:result :ok}))
