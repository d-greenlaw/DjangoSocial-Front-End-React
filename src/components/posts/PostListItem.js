import React from 'react'
import { Link } from 'react-router-dom'

// https://stackoverflow.com/questions/27934238/rendering-raw-html-with-reactjs

const PostListItem = ({ post }) => {
    return (
        <Link to={`/post/${post.id}`}>
            
            <div class="col-sm-12">
                <div class="card card-block card-stretch card-height">
                    <div class="card-body">
                        <div class="user-post-data">
                            <div class="d-flex justify-content-between">
                            <div class="me-3">
                                <img class="rounded-circle img-fluid" src="/images/user/01.jpg" alt=""/>
                            </div>
                            <div class="w-100">
                                <div class="d-flex justify-content-between">
                                    <div class="">
                                        <h5 class="mb-0 d-inline-block">Anna Sthesia</h5>
                                        <span class="mb-0 d-inline-block">Add New Post</span>
                                        <p class="mb-0 text-primary">Just Now</p>
                                    </div>
                                    <div class="card-post-toolbar">
                                        <div class="dropdown">
                                        <span class="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        <i class="ri-more-fill"></i>
                                        </span>
                                        <div class="dropdown-menu m-0 p-0">
                                            <a class="dropdown-item p-3" href="#">
                                                <div class="d-flex align-items-top">
                                                    <div class="h4">
                                                    <i class="ri-save-line"></i>
                                                    </div>
                                                    <div class="data ms-2">
                                                    <h6>Save Post</h6>
                                                    <p class="mb-0">Add this to your saved items</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item p-3" href="#">
                                                <div class="d-flex align-items-top">
                                                    <i class="ri-close-circle-line h4"></i>
                                                    <div class="data ms-2">
                                                    <h6>Hide Post</h6>
                                                    <p class="mb-0">See fewer posts like this.</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item p-3" href="#">
                                                <div class="d-flex align-items-top">
                                                    <i class="ri-user-unfollow-line h4"></i>
                                                    <div class="data ms-2">
                                                    <h6>Unfollow User</h6>
                                                    <p class="mb-0">Stop seeing posts but stay friends.</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item p-3" href="#">
                                                <div class="d-flex align-items-top">
                                                    <i class="ri-notification-line h4"></i>
                                                    <div class="data ms-2">
                                                    <h6>Notifications</h6>
                                                    <p class="mb-0">Turn on notifications for this post</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="mt-3">
                        <p dangerouslySetInnerHTML={{__html: post.post_body}}></p>
                        </div>
                        <div class="user-post">
                            <div class=" d-grid grid-rows-2 grid-flow-col gap-3">
                            <div class="row-span-2 row-span-md-1">
                                <img src="/images/page-img/p2.jpg" alt="post-image" class="img-fluid rounded w-100" />
                            </div>
                            <div class="row-span-1">
                                <img src="/images/page-img/p1.jpg" alt="post-image" class="img-fluid rounded w-100" />
                            </div>
                            <div class="row-span-1 ">
                                <img src="/images/page-img/p3.jpg" alt="post-image" class="img-fluid rounded w-100" />
                            </div>
                            </div>
                        </div>
                        <div class="comment-area mt-3">
                            <div class="d-flex justify-content-between align-items-center flex-wrap">
                            <div class="like-block position-relative d-flex align-items-center">
                                <div class="d-flex align-items-center">
                                    <div class="like-data">
                                        <div class="dropdown">
                                        <span class="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        <img src="/images/icon/01.png" class="img-fluid" alt=""/>
                                        </span>
                                        <div class="dropdown-menu py-2">
                                            <a class="ms-2 me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Like"><img src="/images/icon/01.png" class="img-fluid" alt=""/></a>
                                            <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="Love"><img src="/images/icon/02.png" class="img-fluid" alt=""/></a>
                                            <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="Happy"><img src="/images/icon/03.png" class="img-fluid" alt=""/></a>
                                            <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="HaHa"><img src="/images/icon/04.png" class="img-fluid" alt=""/></a>
                                            <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="Think"><img src="/images/icon/05.png" class="img-fluid" alt=""/></a>
                                            <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="Sade" ><img src="/images/icon/06.png" class="img-fluid" alt=""/></a>
                                            <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="Lovely"><img src="/images/icon/07.png" class="img-fluid" alt=""/></a>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="total-like-block ms-2 me-3">
                                        <div class="dropdown">
                                        <span class="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        140 Likes
                                        </span>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Max Emum</a>
                                            <a class="dropdown-item" href="#">Bill Yerds</a>
                                            <a class="dropdown-item" href="#">Hap E. Birthday</a>
                                            <a class="dropdown-item" href="#">Tara Misu</a>
                                            <a class="dropdown-item" href="#">Midge Itz</a>
                                            <a class="dropdown-item" href="#">Sal Vidge</a>
                                            <a class="dropdown-item" href="#">Other</a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="total-comment-block">
                                    <div class="dropdown">
                                        <span class="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        20 Comment
                                        </span>
                                        <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Max Emum</a>
                                        <a class="dropdown-item" href="#">Bill Yerds</a>
                                        <a class="dropdown-item" href="#">Hap E. Birthday</a>
                                        <a class="dropdown-item" href="#">Tara Misu</a>
                                        <a class="dropdown-item" href="#">Midge Itz</a>
                                        <a class="dropdown-item" href="#">Sal Vidge</a>
                                        <a class="dropdown-item" href="#">Other</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="share-block d-flex align-items-center feather-icon mt-2 mt-md-0">
                                <a href="javascript:void();" data-bs-toggle="offcanvas" data-bs-target="#share-btn" aria-controls="share-btn"><i class="ri-share-line"></i>
                                <span class="ms-1">99 Share</span></a>                           
                            </div>
                            </div>
                            <hr/>
                            <ul class="post-comments list-inline p-0 m-0">
                            <li class="mb-2">
                                <div class="d-flex">
                                    <div class="user-img">
                                        <img src="/images/user/02.jpg" alt="userimg" class="avatar-35 rounded-circle img-fluid"/>
                                    </div>
                                    <div class="comment-data-block ms-3">
                                        <h6>Monty Carlo</h6>
                                        <p class="mb-0">Lorem ipsum dolor sit amet</p>
                                        <div class="d-flex flex-wrap align-items-center comment-activity">
                                        <a href="javascript:void();">like</a>
                                        <a href="javascript:void();">reply</a>
                                        <a href="javascript:void();">translate</a>
                                        <span> 5 min </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex">
                                    <div class="user-img">
                                        <img src="/images/user/03.jpg" alt="userimg" class="avatar-35 rounded-circle img-fluid"/>
                                    </div>
                                    <div class="comment-data-block ms-3">
                                        <h6>Paul Molive</h6>
                                        <p class="mb-0">Lorem ipsum dolor sit amet</p>
                                        <div class="d-flex flex-wrap align-items-center comment-activity">
                                        <a href="javascript:void();">like</a>
                                        <a href="javascript:void();">reply</a>
                                        <a href="javascript:void();">translate</a>
                                        <span> 5 min </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            </ul>
                            <form class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                            <input type="text" class="form-control rounded" placeholder="Enter Your Comment"/>
                            <div class="comment-attagement d-flex">
                                <a href="javascript:void();"><i class="ri-link me-3"></i></a>
                                <a href="javascript:void();"><i class="ri-user-smile-line me-3"></i></a>
                                <a href="javascript:void();"><i class="ri-camera-line me-3"></i></a>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </Link>
    )
}

export default PostListItem
