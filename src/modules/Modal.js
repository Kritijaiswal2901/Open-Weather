const Modal = (props) => {
  let city = props.city

  let title = props.isNewCity ? "Add City" : "Update City"
  return (
     props.show && <div id='ModalView' className="modal fade show d-block">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="modal-label">{title}</h4>
              <button onClick={props.dismissModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" defaultValue={city.name} className="form-control" onChange={(e) => props.updateProperty("name", e.target.value)} aria-describedby="name"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="latitude" className="form-label">Latitude</label>
                  <input type="text" defaultValue={String(city.latitude)} className="form-control" onChange={(e) => props.updateProperty("latitude", Number(e.target.value))} aria-describedby="latitude"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="longitude" className="form-label">Longitude</label>
                  <input type="text" defaultValue={String(city.longitude)} className="form-control" onChange={(e) => props.updateProperty("longitude", Number(e.target.value))} aria-describedby="longitude"/>
                </div>
            </div>
            <div className="modal-footer">
              <button onClick={props.dismissModal} type="button" className="btn btn-default" data-bs-dismiss="modal" aria-label="Close">Close</button>
              <button onClick={props.updateCity} type="submit" className="btn btn-primary">Update</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Modal