import React from 'react';
import '../styles/registerStyle.css'
export default function Register() {
    return (
        <div>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous" />
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
            
            <div class="main-block">
                <div class="left-part">
                    <i class="fas fa-graduation-cap"></i>
                    <h1>Register for the Amazing Experience</h1>
                    <p>Expert-farming provides free experience sharing platform for farmers ranges from beginner to advance farmers.
                        You can also check the quality of your soil by providing the picture of your land.
                        You can also interact and discuss with experienced farmers arround the globe.
                    </p>
                    <div class="btn-group">
                        <a class="btn-item" href="#">Learn to Farm</a>
                        <a class="btn-item" href="#">#</a>
                    </div>
                </div>
                <form action="/register/data" method="POST">
                    <div class="title">
                        <i class="fas fa-pencil-alt"></i>
                        <h2>Register here</h2>
                    </div>
                    <div class="info">
                        <input class="fname" type="text" name="name" placeholder="Full name" />
                        <input type="text" name="username" placeholder="Username" />
                        <input type="text" name="name" placeholder="Email" />
                        <input type="text" name="name" placeholder="Phone number" />
                        <input type="date" name="dob" placeholder="D.O.B" />
                        <input type="password" name="password" placeholder="Password" />
                        <input type="password" name="confrimpassword" placeholder="Confirm Password" />
                        <input type="text" name="country" placeholder="Country" />
                        <input type="text" name="state" placeholder="State" />
                        <input type="text" name="address" placeholder="Address" />
                        <select>
                            <option value="course-type" selected>Years of Experience*</option>
                            <option value="short-courses">0-5</option>
                            <option value="featured-courses">6-10</option>
                            <option value="undergraduate">11-15</option>
                            <option value="diploma">15 and above</option>
                            
                        </select>
                        <select>
                            <option value="course-type" selected>Product Produce*</option>
                            <option value="short-courses">Short courses</option>
                            <option value="featured-courses">Featured courses</option>
                            <option value="undergraduate">Undergraduate</option>
                            <option value="diploma">Diploma</option>
                            <option value="certificate">Certificate</option>
                            <option value="masters-degree">Masters degree</option>
                            <option value="postgraduate">Postgraduate</option>
                        </select>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" name="checkbox" /><span>I agree to the <a href="#">Privacy Poalicy for Expert-farming.</a></span>
                    </div>
                    <button type="submit" href="/">Submit</button>
                </form>
            </div>
        </div>
    )
}