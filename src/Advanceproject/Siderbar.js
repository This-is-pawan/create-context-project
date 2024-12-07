import React from "react";

const Siderbar = () => {
  return (
    <>
      <div className="main">
        <div className="main-align">
          {/* navbar  */}
          <div className="sideBar">
            <div className="logo">
              <h1 className="icon">
                <ion-icon name="cloudy"></ion-icon>
              </h1>
              <h2>Maxpole</h2>
            </div>
            <div className="slideConatiner">
              <article className="dashbord">
                <i className="fas fa-home"></i>
                <span>dashboard</span>
                <i className="fas fa-angle-down"></i>
              </article>
              {/*  */}
              <article className="caret">
                <article className="caret1">
                  <i class="fas fa-caret-right"></i>
                  <span>Analysis</span>
                </article>
                <article className="caret2">
                  <i class="fas fa-caret-right"></i>
                  <span>eCommerce</span>
                </article>
              </article>
              {/*  */}
              <article className="widgets">
                <i class="fa-solid fa-boxes-stacked"></i>
                <span>Widgets</span>
                <i className="fas fa-angle-left"></i>
              </article>
              <article className="widgets">
                <i class="fa-solid fa-table-cells"></i>
                <span>Apps</span>
                <i className="fas fa-angle-left"></i>
              </article>
              <article className="ui_elements">
                <p>UI ElEMENTS</p>
                <article className="ui-elementchild">
                  <article className="ui-element">
                    <i class="fas fa-credit-card"></i>
                    <span>Card</span>
                  </article>
                  <article className="ui-element">
                    <i class="fas fa-clipboard"></i>
                    <span>eCommerce</span>
                    <i className="fas fa-angle-left"></i>
                  </article>
                  <article className="ui-element">
                    <i class="fas fa-gift"></i>
                    <span>Component</span>
                    <i className="fas fa-angle-left"></i>
                  </article>
                  <article className="ui-element">
                    <i class="fas fa-icons"></i>
                    <span>Icons & music</span>
                    <i className="fas fa-angle-left"></i>
                  </article>
                </article>
              </article>

              {/*  */}
              <article className="ui_elements">
                <p>forms & tables</p>
                <article className="ui-elementchild">
                  <article className="ui-element">
                    <i class="fa-brands fa-wpforms"></i>
                    <span>forms</span>
                    <i className="fas fa-angle-left"></i>
                  </article>
                  <article className="ui-element">
                    <i class="fas fa-table"></i>
                    <span>tables</span>
                    <i className="fas fa-angle-left"></i>
                  </article>

                  {/*  */}
                </article>
              </article>
              <article className="ui_elements">
                <p>Pages</p>
                <article className="ui-elementchild">
                  <article className="ui-element">
                    <i class="fa-brands fa-wpforms"></i>
                    <span>authentication</span>
                    <i className="fas fa-angle-down"></i>
                  </article>
                  <article className="ui-element">
                    <i class="fas fa-user"></i>
                    <span>user Profile</span>
                  </article>
                  <article className="ui-element">
                    <i class="fas fa-stopwatch"></i>
                    <span> timeline </span>
                  </article>

                  <article className="ui-element">
                    <i class="fas fa-warning"></i>
                    <span> pages </span>
                    <i className="fas fa-angle-left"></i>
                  </article>
                </article>
              </article>
            </div>
          </div>
          <div className="NavBar">
            <div className="navalign">
              <i className="fas fa-bars"></i>
              <article className="Search">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="search" />
              </article>

              <article className="NavIcon">
                <article className="bell">
                  <i className="fas fa-box aligningoficon"></i>
                  <span>1</span>
                </article>
                <i className="fas fa-check-double aligningoficon"></i>
                <i className="fas fa-table aligningoficon"></i>
                <article className="bell">
                  <i className="fas fa-bell aligningoficon"></i>
                  <span>1</span>
                </article>
                <i className="fas fa-card aligningoficon"></i>
                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="img aligningoficon"
                />
              </article>
            </div>

            <section className="welcome-back">
              <div className="welcome">
                <p>Dashboard</p>
                <i className="fas fa-home"></i>
                <p>Analysis</p>
              </div>

              <article className="profile">
                <article className="profileAlign">

                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="img aligningoficon"
                  />
<p>welcomeback</p>
<h3>jhon Anderson</h3>

                  </article>
<article>

<article className="graph">
<span>$65.4k</span>
<p>today's sales</p>
<span><p></p></span>
</article>
<article className="graph">
<span>$65.4k</span>
<p>today's sales</p>
<span><p></p></span>

</article>
<img src="" alt="" className="svg" />
</article>
              </article>

            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Siderbar;
