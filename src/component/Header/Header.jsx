const Header = () =>{
    return(
        <header>
            <div className="header">

                <div className="left">
                    <div className="login-membership">

                        <button className="membership">
                            ثبت نام
                        </button>
                        
                        <p className="jodakonande">
                            /
                        </p>
                        <button className="login">
                           
                            <a className="login" href="http://localhost:3000/login" target="_blank"> ورود</a>
                        </button>

                        <div className="svg-user">
                            <svg className="user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"> <path fill="rgb(0, 0, 0)" d="M240 192C240 147.8 275.8 112 320 112C364.2 112 400 147.8 400 192C400 236.2 364.2 272 320 272C275.8 272 240 236.2 240 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM144 544C144 473.3 201.3 416 272 416L368 416C438.7 416 496 473.3 496 544L496 552C496 565.3 506.7 576 520 576C533.3 576 544 565.3 544 552L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 552C96 565.3 106.7 576 120 576C133.3 576 144 565.3 144 552L144 544z"/> </svg>
                        </div>

                        
                    </div>
                    
                    <div className="svg-search">
                        <svg className="search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(0, 0, 0)" d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/> </svg>
                    </div>

                </div>

                <div className="middle">
                    <p className="khane">
                        خانه
                    </p>

                    <p className="maghsad">
                        مقصد
                    </p>

                    <p className="vila">
                        ویلاها
                    </p>

                    <p className="hotel">
                        هتل ها
                    </p>

                    <p className="tajrobe">
                        تجربه ها
                    </p>

                    <p className="about-us">
                        درباره ما
                    </p>

                    <p className="contact">
                       تماس با ما
                    </p>

                </div>

                <div className="right">
                    <img className="logo-pic" src="/pic/vilajo_logo_crop__1___1_-removebg-preview (1).png">
                    </img>
                </div>

            </div>
            
        </header>
    )
}

export default Header;