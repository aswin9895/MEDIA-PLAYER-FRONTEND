import React, { useEffect, useState } from 'react'
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap'
import { addCategoryAPI, getAllCategoryAPI, getSingleVideoAPI, removeCategoryAPI, removeVideoAPI, updateCategoryAPI } from '../services/allApi';
import VideoCard from './VideoCard'

const Category = ({ setRemoveVideoResponseFromCategory, removeVideoResponseFromView }) => {
  const [allcategories, setAllCategories] = useState([])
  const [categoryName, setCategoryName] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getCategory()
  }, [removeVideoResponseFromView])

  const handleAddCategory = async () => {
    if (categoryName) {
      const categoryDetails = { categoryName, allVideos: [] }
      await addCategoryAPI(categoryDetails)
      handleClose()
      setCategoryName("")
      getCategory()
    } else {
      alert("Please fill the form completely!!!")
    }
  }

  const getCategory = async () => {
    const response = await getAllCategoryAPI()
    setAllCategories(response.data)
  }
  // console.log(allcategories);
  const deleteCategory = async (id) => {
    await removeCategoryAPI(id)
    getCategory()
  }

  const dragOverCategory = e => {
    e.preventDefault()
  }

  const videoDopOverCategory = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData("id")
    // console.log(`video id: ${videoId} droped inside category id: ${categoryId}`);

    // add video into category
    // get dropping video details
    const { data } = await getSingleVideoAPI(videoId)
    // console.log(data);
    // get details dropping category and insert ideoDetails of category all videos
    const selectedCategory = allcategories?.find(item => item.id == categoryId)
    selectedCategory.allVideos.push(data)
    // console.log(selectedCategory);
    // update selected category into json file
    await updateCategoryAPI(categoryId, selectedCategory)
    // remove videos from allvideos - call api
    const response = await removeVideoAPI(videoId)
    // pass response to view component
    setRemoveVideoResponseFromCategory(response)
    // get all updated categories
    getCategory()
  }

  const categoryVideoDragStart = (e, categoryId, video) => {
    console.log(`video with id: ${video.id} from category id ${categoryId} has started dragging`);
    let dataShare = { categoryId, video }
    e.dataTransfer.setData("dataShare", JSON.stringify(dataShare))
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <h3>All Categories</h3>
        <button onClick={handleShow} className='btn rounded-circle ms-3 fs-5 fw-bolder bg-warning text-center text-white'>+</button>
      </div>

      <div className="container-fluid mt-3">
        {
          allcategories?.length > 0 ?
            allcategories?.map(categoryDetails => (
              <div droppable="true" onDragOver={dragOverCategory} onDrop={e => videoDopOverCategory(e, categoryDetails?.id)} className="border rounded p-3 mb-2">
                <div className="d-flex justify-content-between">
                  <h5>{categoryDetails?.categoryName}</h5>
                  <button onClick={e => deleteCategory(categoryDetails?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
                </div>
                {/* each category videos */}
                <div className='row mt-2'>
                  {
                    categoryDetails?.allVideos?.length > 0 &&
                    categoryDetails?.allVideos?.map(video => (
                      <div draggable={true} onDragStart={e => categoryVideoDragStart(e, categoryDetails?.id, video)} key={video?.id} className="col-md-4 mt-2">
                        <VideoCard displayData={video} insideCategory={true} />
                      </div>
                    ))
                  }
                </div>

              </div>
            ))
            :
            <div className='text-danger fw-bolder'>No Categories added Yet!!!</div>
        }
      </div>

      <Modal show={show} onHide={handleClose} centered keyboard={false} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title className='fw-bolder'>Category Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingInputName" label="Category Name" className="mb-3">
            <Form.Control onChange={e => setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button className='btn btn-info' variant="primary" onClick={handleAddCategory}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Category