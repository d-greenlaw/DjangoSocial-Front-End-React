import React, { useState, useEffect, Fragment } from 'react';
import Posts from '../../components/posts/Posts'
import PostForm from '../../components/posts/PostForm'

const Feed = () => {
  const [userEmail, setUserEmail] = useState('');  // FIGURE OUT IF THIS NEEDS TO BE HERE WITH "Loading" Etc
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('http://localhost:3000/login');
    } else {
      fetch('http://127.0.0.1:8000/api/v1/accounts/auth/user/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setUserEmail(data.email);
          setLoading(false);
        });
    }
  }, []);

  return (
   <div id="content-page" className="content-page">
      {loading === false && (
       <div class="container">
               <div class="row">
                  <div class="col-lg-8 row m-0 p-0">
                     <PostForm/>
                     <Posts/>
                  </div>
                  <div class="col-lg-4">
                     <div class="card">
                        <div class="card-header d-flex justify-content-between">
                           <div class="header-title">
                              <h4 class="card-title">Stories</h4>
                           </div>
                        </div>
                        <div class="card-body">
                           <ul class="media-story list-inline m-0 p-0">
                              <li class="d-flex mb-3 align-items-center">
                                 <i class="ri-add-line"></i>
                                 <div class="stories-data ms-3">
                                    <h5>Creat Your Story</h5>
                                    <p class="mb-0">time to story</p>
                                 </div>
                              </li>
                              <li class="d-flex mb-3 align-items-center active">
                                 <img src="images/page-img/s2.jpg" alt="story-img" class="rounded-circle img-fluid"/>
                                 <div class="stories-data ms-3">
                                    <h5>Anna Mull</h5>
                                    <p class="mb-0">1 hour ago</p>
                                 </div>
                              </li>
                              <li class="d-flex mb-3 align-items-center">
                                 <img src="images/page-img/s3.jpg" alt="story-img" class="rounded-circle img-fluid"/>
                                 <div class="stories-data ms-3">
                                    <h5>Ira Membrit</h5>
                                    <p class="mb-0">4 hour ago</p>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center">
                                 <img src="images/page-img/s1.jpg" alt="story-img" class="rounded-circle img-fluid"/>
                                 <div class="stories-data ms-3">
                                    <h5>Bob Frapples</h5>
                                    <p class="mb-0">9 hour ago</p>
                                 </div>
                              </li>
                           </ul>
                           <a href="#" class="btn btn-primary d-block mt-3">See All</a>
                        </div>
                     </div>
                     <div class="card">
                        <div class="card-header d-flex justify-content-between">
                           <div class="header-title">
                              <h4 class="card-title">Events</h4>
                           </div>
                           <div class="card-header-toolbar d-flex align-items-center">
                              <div class="dropdown">
                                 <div class="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                    <i class="ri-more-fill h4"></i>
                                 </div>
                                 <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#"><i class="ri-eye-fill me-2"></i>View</a>
                                    <a class="dropdown-item" href="#"><i class="ri-delete-bin-6-fill me-2"></i>Delete</a>
                                    <a class="dropdown-item" href="#"><i class="ri-pencil-fill me-2"></i>Edit</a>
                                    <a class="dropdown-item" href="#"><i class="ri-printer-fill me-2"></i>Print</a>
                                    <a class="dropdown-item" href="#"><i class="ri-file-download-fill me-2"></i>Download</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="card-body">
                           <ul class="media-story list-inline m-0 p-0">
                              <li class="d-flex mb-4 align-items-center ">
                                 <img src="images/page-img/s4.jpg" alt="story-img" class="rounded-circle img-fluid"/>
                                 <div class="stories-data ms-3">
                                    <h5>Web Workshop</h5>
                                    <p class="mb-0">1 hour ago</p>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center">
                                 <img src="images/page-img/s5.jpg" alt="story-img" class="rounded-circle img-fluid"/>
                                 <div class="stories-data ms-3">
                                    <h5>Fun Events and Festivals</h5>
                                    <p class="mb-0">1 hour ago</p>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="card">
                        <div class="card-header d-flex justify-content-between">
                           <div class="header-title">
                              <h4 class="card-title">Upcoming Birthday</h4>
                           </div>
                        </div>
                        <div class="card-body">
                           <ul class="media-story list-inline m-0 p-0">
                              <li class="d-flex mb-4 align-items-center">
                                 <img src="images/user/01.jpg" alt="story-img" class="rounded-circle img-fluid"/>
                                 <div class="stories-data ms-3">
                                    <h5>Anna Sthesia</h5>
                                    <p class="mb-0">Today</p>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center">
                                 <img src="images/user/02.jpg" alt="story-img" class="rounded-circle img-fluid"/>
                                 <div class="stories-data ms-3">
                                    <h5>Paul Molive</h5>
                                    <p class="mb-0">Tomorrow</p>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="card">
                        <div class="card-header d-flex justify-content-between">
                           <div class="header-title">
                              <h4 class="card-title">Suggested Pages</h4>
                           </div>
                           <div class="card-header-toolbar d-flex align-items-center">
                              <div class="dropdown">
                                 <div class="dropdown-toggle" id="dropdownMenuButton01" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                    <i class="ri-more-fill h4"></i>
                                 </div>
                                 <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton01">
                                    <a class="dropdown-item" href="#"><i class="ri-eye-fill me-2"></i>View</a>
                                    <a class="dropdown-item" href="#"><i class="ri-delete-bin-6-fill me-2"></i>Delete</a>
                                    <a class="dropdown-item" href="#"><i class="ri-pencil-fill me-2"></i>Edit</a>
                                    <a class="dropdown-item" href="#"><i class="ri-printer-fill me-2"></i>Print</a>
                                    <a class="dropdown-item" href="#"><i class="ri-file-download-fill me-2"></i>Download</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="card-body">
                           <ul class="suggested-page-story m-0 p-0 list-inline">
                              <li class="mb-3">
                                 <div class="d-flex align-items-center mb-3">
                                    <img src="images/page-img/42.png" alt="story-img" class="rounded-circle img-fluid avatar-50"/>
                                    <div class="stories-data ms-3">
                                       <h5>Iqonic Studio</h5>
                                       <p class="mb-0">Lorem Ipsum</p>
                                    </div>
                                 </div>
                                 <img src="images/small/img-1.jpg" class="img-fluid rounded" alt="Responsive image"/>
                                 <div class="mt-3"><a href="#" class="btn d-block"><i class="ri-thumb-up-line me-2"></i> Like Page</a></div>
                              </li>
                              <li class="">
                                 <div class="d-flex align-items-center mb-3">
                                    <img src="images/page-img/42.png" alt="story-img" class="rounded-circle img-fluid avatar-50"/>
                                    <div class="stories-data ms-3">
                                       <h5>Cakes & Bakes </h5>
                                       <p class="mb-0">Lorem Ipsum</p>
                                    </div>
                                 </div>
                                 <img src="images/small/img-2.jpg" class="img-fluid rounded" alt="Responsive image"/>
                                 <div class="mt-3"><a href="#" class="btn d-block"><i class="ri-thumb-up-line me-2"></i> Like Page</a></div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-12 text-center">
                     <img src="images/page-img/page-load-loader.gif" alt="loader" style={{height:'100px'}}/>
                  </div>
               </div>
         
         </div>
       )}
    </div>
  )
}

export default Feed
