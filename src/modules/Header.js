const Header = (props) => {
  return (
    
    <>
    <div className="d-flex justify-content-between mb-4">
      <h1 className="mr-auto">Open Weather Project</h1>
      <div className="d-flex align-items-center">

        <div className="d-flex align-items-center justify-content-center me-3">
          <div className="form-text">&#8457;</div>
          <div className="form-check form-switch form-check-inline m-0 p-1 px-2">
            <input onChange={props.onToggle} className="form-check-input form-check-inline m-0" type="checkbox" />
          </div>
          <div className="form-text">&#8451;</div>
        </div>
        <button onClick={props.onAdd} className="btn btn-primary"><i className="fa-sharp fa-solid fa-plus"></i> Add</button>
      </div>
    </div>
    </>

  )
}

export default Header