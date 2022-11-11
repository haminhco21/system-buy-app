import React from "react";
import { GiLotus } from "react-icons/gi";
import "./Home.scss";





const Home = () => {
  return (
    <div className="home " >
      <nav className="container --flex-between ">
        <div className="logo">
          <GiLotus size={35} />
        </div>
        <ul class="home-links" minh-data="1">
    <li class="mobile">
        <a href="/" id="toggle-menu-mobile" class="close-menu-mobile">
            <span class="remixicon-menu-line"></span>
        </a>
    </li>
            <li class="  ">
            <a href="/" target="_self">
                <i class=""></i> <span>CLB</span>
            </a>
                    </li>
            <li class="  ">
            <a href="/" target="_self">
                <i class=""></i> <span>Dịch vụ</span>
            </a>
                    </li>
            <li class="  ">
            <a href="/" target="_self">
                <i class=""></i> <span>Lịch Học</span>
            </a>
                    </li>
            <li class="  ">
            <a href="/" target="_self">
                <i class=""></i> <span>Chính sách giá</span>
            </a>
                    </li>
            <li class="  ">
            <a href="/" target="_self">
                <i class=""></i> <span>Tin tức</span>
            </a>
                    </li>
            <li class="  ">
            <a href="/" target="_self">
                <i class=""></i> <span>Khuyến mãi</span>
            </a>
                    </li>
        
</ul>
<a href="login" class="d-none d-md-block btn btn-brand"> Đăng kí tập thử</a>
      </nav>
      {/* HERO SECTION */}  
    </div>
  );
};

export default Home;