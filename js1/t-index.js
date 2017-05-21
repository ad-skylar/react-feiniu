/**
 * Created by Administrator on 2017/5/6.
 */
var style = {
    header: {
        width: "100vw", height: "0.45rem", background: "white", lineHeight: "0.45rem", fontSize: "0.15rem"
    },
    li: {float: "left", padding: "0.13rem 0.13rem", fontSize: "14px", "font-weight": "700"},
    li1: {
        width: "1.05rem",
        height: "0.47rem",
        float: "left",
        fontSize: "0.12rem",
        textAlign: "center",
        lineHeight: "0.2rem"

    },
    section: {
        img: {width: "1.03rem", height: "1.03rem", float: "left"},
        img1: {width: "1.03rem", height: "1.03rem"},
        div: {width: "2.40rem", height: "1.03rem", float: "left", padding: "0.13rem 0.13rem"},
        em: {
            width: "0.27rem",
            height: "0.15rem",
            border: "solid 1px #c20053",
            borderRadius: "0.03rem",
            fontSize: "0.12rem",
            color: "#c20053"
        },
        span: {fontSize: "12px"},
        span1: {marginTop: "0.26rem", float: "left", width: "100%"}
    },
    timer: {
        span: {padding: "0.06rem", borderRadius: "0.03rem", background: "#48454e", fontSize: "0.12rem", color: "white"}
    },
    ul: {
        div: {
            height: "1.39rem",
            width: "100vw",
            background: "rgba(255,255,255,0.9)",
            position: "absolute",
            top: "0.4rem",
            display: "none"
        }
    },
    swiper: {
        s_s: {width: "100vw", height: "auto", display: "flex", "flex-direction": "row",},
        s_s1: {width: "100vw", height: "auto", background: "green", display: "flex", "flex-direction": "row"},
        s_s2: {width: "100vw", height: "auto", background: "blue", display: "flex", "flex-direction": "row"},
        flex: {flex: "1", display: "flex", flexDirection: "column", " align-items": "center",border:"solid 1px #e1e1e1","border-radius":"0.05rem"}
    },
  margin:{marginTop:"0.1rem"}
}
var Lk = React.createClass({

    getInitialState: function () {
        return {
            res: "",
            red: "",
            req: "",
            arr: []
        }
    },
    componentWillMount: function () {
        var a = this;
        var b = null;

        $.getJSON("../json/product.json", function (data) {
            var arr1 = []
            console.log(data["T"]["banner"])
            a.setState({res: data["T"]["banner"]})
            a.setState({red: data["T"]["skill"][0]})
            a.setState({req: data["T"]["skill"][4]})
            console.log(data["skill"][0].img)
            for (var i = 0; i < data["skill"].length; i++) {
                arr1.push(data["skill"][i].img)
            }
            a.setState({arr: arr1})
        })

        setInterval(function () {
            var time = new Date("2017/6/10 17:09:00").getTime() - new Date().getTime()
            $("#hours").html(parseInt(time / 1000 / 60 / 60))
            $("#minute").html(parseInt(time / 1000 / 60 % 60))
            if (parseInt(time / 1000 % 60) < 10) {
                $("#second").html("0" + parseInt(time / 1000 % 60))
            } else {
                $("#second").html(parseInt(time / 1000 % 60))
            }
            if (parseInt(time / 1000 / 60 % 60) < 10) {
                $("#second").html("0" + parseInt(time / 1000 / 60 % 60))
            } else {
                $("#minute").html(parseInt(time / 1000 / 60 % 60))
            }
            if (parseInt(time / 1000 / 60 / 60) < 10) {
                $("#second").html("0" + parseInt(time / 1000 / 60 / 60))
            } else {
                $("#hours").html(parseInt(time / 1000 / 60 / 60))
            }

        }, 1000)
    },

    render: function () {
        return (
            <div>
                <div id="bg" style={{
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    background: "rgba(0,0,0,0.5)",
                    zIndex: "100000",
                    display: "none"
                }}>
                </div>
                <header style={style.header}>
                    <span className=" mui-icon mui-icon-arrowleft" style={{fontSize: "0.30rem"}}></span> <span
                    className="fl"></span> <span style={{marginRight: "1rem"}}>返回</span> <span
                    style={{fontWeight: "300"}}>T恤节</span>
                </header>
                <img src={ this.state.res} style={{width: "3.75rem", height: "1.60rem"}}/>
                <ul className="uu" id="fix"
                    style={{width: "100vw", height: "0.4rem", background: "white", zIndex: "1000000"}}>
                    <li className="t_i" style={style.li}><span className="mui-icon mui-icon-location"
                                                               style={{color: "#c20053", opacity: "0"}}></span>热卖爆款
                    </li>
                    <li className="t_i" style={style.li}><span className="mui-icon mui-icon-location"
                                                               style={{color: "#c20053", opacity: "0"}}></span>纯真童T
                    </li>
                    <li className="t_i" style={style.li}><span className="mui-icon mui-icon-location"
                                                               style={{color: "#c20053", opacity: "0"}}></span>时尚女T
                    </li>
                    {/*<li className="t_i" style={style.li}><span className="mui-icon mui-icon-location" style={{color:"#c20053",opacity:"0"}}></span>经典男T</li>*/}
                    <span id="t_span" style={{fontSize: "0.14rem", paddingLeft: "0.12rem", display: "none"}}>切换分类</span>
                    <img className="ll" style={{float: "right", "box-shadow": "0 0 0.05rem black"}} src="../img/01.png"
                         alt=""/>
                    <div id="t_d" style={style.ul.div}>
                        <ul id="t_u">
                            <li style={style.li}><span className="mui-icon mui-icon-location"
                                                       style={{color: "#c20053", opacity: "0"}}></span>热卖爆款
                            </li>
                            <li style={style.li}><span className="mui-icon mui-icon-location"
                                                       style={{color: "#c20053", opacity: "0"}}></span>纯真童T
                            </li>
                            <li style={style.li}><span className="mui-icon mui-icon-location"
                                                       style={{color: "#c20053", opacity: "0"}}></span>时尚女T
                            </li>
                            <li style={style.li}><span className="mui-icon mui-icon-location"
                                                       style={{color: "#c20053", opacity: "0"}}></span>经典男T
                            </li>
                            <li style={style.li}><span className="mui-icon mui-icon-location"
                                                       style={{color: "#c20053", opacity: "0"}}></span>经典男T
                            </li>
                            <li style={style.li}><span className="mui-icon mui-icon-location"
                                                       style={{color: "#c20053", opacity: "0"}}></span>经典男T
                            </li>
                            <li style={style.li}><span className="mui-icon mui-icon-location"
                                                       style={{color: "#c20053", opacity: "0"}}></span>经典男T
                            </li>
                        </ul>

                    </div>
                </ul>
                <div><img src={this.state.red} style={{width: "100vw", height: "0.5rem", marginTop: "0.4rem"}}/></div>
                {/*<div style={{"width":"100vw",overflow:"auto", "box-shadow": "0 0 0.05rem black"}}>*/}
                <div className="swiper-container"
                     style={{"width": "auto", overflow: "auto", "box-shadow": "0 0 0.05rem black"}}>
                    <div className="swiper-wrapper" style={{"width": "auto", overflow: "auto"}}>
                        <ul className="swiper-slide" style={{width: "6.05rem", height: "0.47rem", overflow: "auto"}}>
                            <li className="li" style={style.li1}>5月4号<br/>以结束</li>
                            <li className="li" style={style.li1}>5月5号<br/>以结束</li>
                            <li className="li" style={style.li1}>5月6号<br/>以结束</li>
                            <li className="li" style={style.li1}>5月7号<br/>以结束</li>
                            <li className="li" style={style.li1}>5月8号<br/>以结束</li>
                        </ul>
                    </div>
                </div>
                {/*</div>*/}
                <div style={{
                    width: "100vw",
                    height: "0.34rem",
                    fontSize: "0.14rem",
                    borderBottom: "solid 4px #eeeeee",
                    lineHeight: "0.34rem"
                }}>
                    <span style={{color: "#c20053", marginLeft: "0.05rem"}}>限时限量 疯狂秒杀</span>
                    <div style={{height: "0.34rem", lineHeight: "0.34rem", float: "right", paddingRight: "0.13rem"}}>
                        <span style={{color: "black", fontSize: "12px", marginRight: "0.12rem"}}>距离结束还有</span>
                        <span id="hours" style={style.timer.span}>00</span>: <span id="minute" style={style.timer.span}>00</span>:<span
                        id="second" style={style.timer.span}>00</span>
                    </div>
                </div>
                <div className="section" style={{
                    borderLeft: "solid 6px #eeeeee",
                    borderRight: "solid 6px #eeeeee",
                    width: "100vw",
                    height: "1.20rem",
                    margin: "0 auto",
                    padding: "0.09rem 0.09rem",
                    borderBottom: "2px solid #eeeeee"
                }}>
                    <img style={style.section.img} src="../img/02.png" alt=""/>
                    <div style={style.section.div}>
                        <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                        <div style={style.section.span1}>
                            <span className="price" style={{color: "#c70034"}}>9.9</span>
                            <span style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                        </div>
                    </div>
                </div>
                <div><img src={this.state.red} style={{width: "100vw", height: "0.5rem"}}/></div>
                <div className="swiper-container1" style={style.margin}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" style={style.swiper.s_s}>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[0]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[1]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[2]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide" style={style.swiper.s_s}>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[3]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[4]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[5]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide" style={style.swiper.s_s}>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[6]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[7]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[8]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className="swiper-container1" style={style.margin}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" style={style.swiper.s_s}>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[10]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[9]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[6]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide" style={style.swiper.s_s}>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[0]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[3]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[1]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide" style={style.swiper.s_s}>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[0]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[5]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[14]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className="swiper-container1" style={style.margin}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" style={style.swiper.s_s}>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[11]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[11]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[4]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide" style={style.swiper.s_s}>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[3]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[5]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[6]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide" style={style.swiper.s_s}>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[0]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[7]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                            <div style={style.swiper.flex}>
                                <img style={style.section.img1} src={this.state.arr[8]} alt=""/>
                                <div>
                                    <em style={style.section.em}>商城</em><span id="t_t" style={style.section.span}> 巧乐奇cherokee夏季新款女童印背带短袖T恤640138</span>
                                    <div style={style.section.span1}>
                                        <span className="price" style={{color: "#c70034"}}>9.9</span>
                                        <span
                                            style={{float: "right", fontSize: "0.14rem", color: "#999999"}}>售完补货中</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-pagination"></div>
                </div>
                <nav className="mui-bar mui-bar-tab">
                    <a className="mui-tab-item mui-active">
                        <span className="mui-icon mui-icon-home"></span>
                        <span className="mui-tab-label">首页</span>
                    </a>
                    <a className="mui-tab-item">
                        <span className="mui-icon mui-icon-phone"></span>
                        <span className="mui-tab-label">电话</span>
                    </a>
                    <a className="mui-tab-item">
                        <span className="mui-icon mui-icon-email"></span>
                        <span className="mui-tab-label">邮件</span>
                    </a>
                    <a className="mui-tab-item">
                        <span className="mui-icon mui-icon-gear"></span>
                        <span className="mui-tab-label">设置</span>
                    </a>
                </nav>

            </div>
        )
    },
    componentDidUpdate: function () {
        var a = 0
        $(".ll").on("tap", function () {
            if (a == 0) {
                this.style.transform = "rotate(180deg)"
                this.style.transition = "1s";
                $(this).css("margin-top", "-0.1rem")
                $(".t_i").css("display", "none");
                $("#t_span").css("display", "block");
                $("#t_d").css("display", "block")
                $("#fix").css({"position": "fixed", "top": "0"});
                $("#bg").css("display", "block")
                a = 1;
            } else {
                this.style.transform = "rotate(0deg)"
                this.style.transition = "1s";
                $("#fix").css({"position": "absolute", "top": "2.10rem"})
                // $(this).css("margin-top","0.1rem")
                $(".t_i").css("display", "block");
                $("#t_span").css("display", "none")
                $("#t_d").css("display", "none")
                $("#bg").css("display", "none")
                a = 0;
            }
            $("#bg").css({})

        })

        $("#t_u li").on("tap", function () {
            var index = $(this).index();
            console.log(index)
            document.body.scrollTop= (index*502)+504;
            console.log(document.body.scrollTop)
            var t_s = $("#t_u li span").eq(index);
            $(this).css("color", "#c20053")
            $(this).find("span").css("opacity", "1")
            $("#t_u li span").not(t_s).css("opacity", "0")
            $(this).siblings().css("color", "black")
        })
        //------------------------------------
        $(window).scroll(function () {
            if (document.body.scrollTop >= 210) {
                $("#fix").css({"position": "fixed", "top": "0"});
            } else {
                if (a == 0) {
                    $("#fix").css({"position": "absolute", "top": "2.10rem"})
                }

            }
        })
        $(".li").eq(0).css({"background": "#c20053", "color": "white"})
        $(".li").on("click", function () {
            $(this).css({"background": "#c20053", "color": "white"})
            $(this).siblings().css({"background": "white", "color": "black"})
        })
        //-----------------list——————————————————


    },
    componentDidMount: function () {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal', loop: true,
            pagination: '.swiper-pagination',
        })
        var mySwiper = new Swiper('.swiper-container1', {
            pagination: '.swiper-pagination',
            autoplay:1500,speed:1000
        })

    }

});
ReactDOM.render(<Lk/>, document.getElementById("con"))