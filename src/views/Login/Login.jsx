import React from "react";
import "./Login.css";
import image0 from "./images/image0.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";

const Login = () => {
  return (
    <div id="dualite-root" className="responsive-container">
      <div className="parent-div">
        <div className="frame-1-194252 pos-abs">
          {/* Frame 21 */}
          <section className="frame-2-194253 pos-abs">
            <div className="astronautspacew-194250 pos-abs">
              <img
                src={image0}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-194250"
                alt="astronaut-space-with-planet-background 11 Image"
              />
            </div>
            <div className="rectangle-1-194257 pos-abs"></div>
            <div className="space-labs-51-2-194254 pos-abs">
              <img
                src={image1}
                className="pos-abs image-div bg-no-repeat bg-crop nodeBg-194254"
                alt="SPACE LABS (5)-1 21 Image"
              />
            </div>
          </section>
          {/* Frame 31 */}
          <section className="frame-3-194258 pos-abs">
            <img
              src={image2}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-194258"
              alt="Frame 31 Image"
            />
            <div className="login-194265 pos-abs ">
              <span className="login-194265-0">Login</span>
            </div>
            <div className="get-your-start--194267 pos-abs">
              <span className="get-your-start--194267-0">
                Get your start here
              </span>
            </div>
            <div className="username-194278 pos-abs">
              <div className="rectangle-6-194279 pos-abs">
              <input type="text " className="fill-parent rectangle-6-194279 image-div tect-white" placeholder="Username" />
              </div>
            </div>
           
              

            <div className="password-login-194273 pos-abs">
              <div className="rectangle-7-194274 pos-abs">
              <input type="text " className="fill-parent rectangle-6-194279 image-div tect-white" placeholder="Password" />
              </div>
            </div>
            <div className="login-194283 pos-abs cursor-pointer">
              <div className="rectangle-8-194284 pos-abs "></div>
              <div className="login-now-194285 pos-abs ">
                <span className="login-now-194285-0">Login Now</span>
              </div>
            </div>
            <div className="sub-title-194268 pos-abs">
              <div className="login-with-othe-194269 pos-abs">
                <span className="login-with-othe-194269-0">
                  Login with Others
                </span>
              </div>
              <div className="subtract-194270 pos-abs">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F07-sep-2024%2Fvedant1725672882515%2Fimage-194-270.png?alt=media&token=0"
                  className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div object-fit"
                  alt="Subtract1 Image"
                />
              </div>
            </div>
            <div className="login-options-194286 pos-abs">
              <div className="group-8-194287 pos-abs cursor-pointer">
                <div className="rectangle-7-194288 pos-abs"></div>
                <div className="group-5-194289 pos-abs">
                  <div className="google-1-194291 pos-abs">
                    <img
                      src={image3}
                      className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-194291"
                      alt="google 11 Image"
                    />
                  </div>
                  <div className="login-with-goog-194290 pos-abs">
                    <span className="login-with-goog-194290-0">
                      Login with google
                    </span>
                  </div>
                </div>
              </div>
              <div className="group-7-194292 pos-abs cursor-pointer">
                <div className="rectangle-8-194293 pos-abs"></div>
                <div className="group-6-194294 pos-abs">
                  <div className="facebook-1-194296 pos-abs">
                    <img
                      src={image4}
                      className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-194296"
                      alt="facebook 11 Image"
                    />
                  </div>
                  <div className="login-with-face-194295 pos-abs">
                    <span className="login-with-face-194295-0">
                      Login with Facebook
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
