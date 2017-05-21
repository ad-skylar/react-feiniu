var sty={
				my_login:{height:'5rem',background:'#fa5c70 url(../img/my_01.jpg) no-repeat bottom',backgroundSize:'100% 100%',padding:'0.24rem',position:'relative' },
				my_top:{textAlign:'right',height:'0.5rem',paddingTop:'0.28rem',marginBottom:'0.4rem'},
				my_message:{display:'inline-block',color:'#fff',fontSize:'0.32rem',textDecoration:'none'},
				my_content:{flexFlow:'row wrap',paddingBottom:'0.3rem',color:'#fff',overflow:'hidden'},
				my_img:{width:'2rem',height:'2rem',borderRadius:'50%',border:'0.04rem solid #f9b5b6',display:'block',float:'left'},
				my_person:{paddingLeft:'0.4rem',paddingTop:'0.6rem',width:'5.5rem',float:'left'},
				my_enter:{paddingTop:'0.25rem',color:'#fff',fontSize:'0.4rem'},
				my_deng:{borderRight:'2px solid #fff',padding:'0 0.2rem',fontWeight:'700'},
				my_zhu:{display:'inline-block',padding:'0 0.2rem',fontWeight:'700'},
				my_h_bottom:{position:'absolute',left:'0',bottom:'0',height:'1.3rem',display:'flex',alignItems:'center',width:'100%',color:'#666',backgroundColor:'#fff',textAlign:'center',fontSize:'0.4rem',listStyle:'none'},
				my_li:{flex:'1',color:'#000'},
				my_span:{width:'100%',display:'block',paddingBottom:'0.3rem',fontSize:'0.5rem'},
				my_part:{background:'#fff',marginTop:'0.3rem',position:'relative',height:'2.5rem'},
				my_h3:{lineHeight:'1rem',marginLeft:'0.3rem',fontSize:'0.5rem',fontWeight:'800',color:'#666',borderBottom:'1px solid #eee'},
				my_span1:{fontWeight:'500',color:'#888',float:'right',fontSize:'0.4rem',marginRight:'0.7rem'},
				my_li1:{paddingBottom:'0.3rem',paddingTop:'0.3rem',fontSize:'0.3rem',color:'#666',textAlign:'center',flex:'1',position:'relative'},
				my_span2:{display:'block',fontSize:'0.3rem'},
				my_xin:{marginBottom:'-1px',display:'block'},
				my_li2:{float:'left',width:'25%',fontSize:'0.3rem',borderRight:'1px solid #eee',borderBottom:'1px solid #eee',height:'2.5rem',paddingBottom:'0.3rem',paddingTop:'0.3rem',color:'#666',textAlign:'center',flex:'1',position:'relative',listStyle:'none'},
				my_p:{paddingTop:'0.3rem',textAlign:'center'},
				my_parth:{background:'#fff',marginTop:'0.3rem',position:'relative',height:'5rem'},
				my_img1:{margin:'0 auto',width:'0.6rem',height:'0.6rem',marginBottom:'0.3rem',display:'block',boder:'0'}
			}
			
			var Demo=React.createClass({
				render:function(){
					return(
						<div>
							<Login/>
							<Part/>
							<Parth/>
							<Parthh/>
						</div>
					)
				}
			})
			
			var Login=React.createClass({
				render:function(){
					return(
						<div style={sty.my_login}>
							<p style={sty.my_top}>
								<a href='javascript:;' style={sty.my_message} >
									<i className='mui-icon mui-icon-chat home'></i>
								</a>
								<a href='javascript:;' className="act" style={sty.my_message} ref="home">
									<i className='mui-icon mui-icon-home home' ></i>
								</a>
							</p>
							<div style={sty.my_content} >
								<img src='../img/my_02.jpg'  style={sty.my_img}/>
								<div style={sty.my_person}>
									<div>
										<p style={sty.my_enter}>
											<span style={sty.my_deng}>登录</span>
											<span style={sty.my_zhu}>注册</span>
										</p>
									</div>
								</div>
							</div>
							<ul style={sty.my_h_bottom} >
								<li style={sty.my_li}><span style={sty.my_span}>0</span>商品收藏</li>
								<li style={sty.my_li}><span style={sty.my_span}>0</span>店铺收藏</li>
								<li style={sty.my_li}><span style={sty.my_span}><i className='dingg icon iconfont'>&#xe630;</i></span>我的足迹</li>
								<li style={sty.my_li}><span style={sty.my_span}><i className='dingg icon iconfont'>&#xe64f;</i></span>签到领积分</li>
							</ul>
						</div>
					)
				},
				componentDidMount:function(){
                    $(this.refs.home)[0].onclick=function () {
                        window.location.href="../index.html"
                    }
				}
			})
			
			var Part=React.createClass({
				render:function(){
					return(
						<div style={sty.my_part}>
							<h3 style={sty.my_h3}><a href='javascript:;'>我的订单<span style={sty.my_span1}>查看全部订单</span></a></h3>
							<ul style={sty.my_h_bottom} >
								<li style={sty.my_li1}><i className='ding icon iconfont'>&#xe641;</i><span style={sty.my_span2}>待付款</span></li>
								<li style={sty.my_li1}><i className='ding icon iconfont'>&#xe660;</i><span style={sty.my_span2}>待发货</span></li>
								<li style={sty.my_li1}><i className='ding icon iconfont'>&#xe656;</i><span style={sty.my_span2}>待收货</span></li>
								<li style={sty.my_li1}><i className='ding icon iconfont'>&#xe623;</i><span style={sty.my_span2}>待评论</span></li>
								<li style={sty.my_li1}><i className='ding icon iconfont'>&#xe600;</i><span style={sty.my_span2}>退货</span></li>
							</ul>
						</div>
					)
				}
			})
			var Parth=React.createClass({
				render:function(){
					return(
						<div style={sty.my_part}>
							<h3 style={sty.my_h3}><a href='javascript:;'>我的资产</a></h3>
							<ul style={sty.my_h_bottom} >
								
								<li style={sty.my_li1}><i className='ding icon iconfont'>&#xe6a7;</i><span style={sty.my_span2}>账户余额</span></li>
								<li style={sty.my_li1}><i className='ding icon iconfont'>&#xe827;</i><span style={sty.my_span2}>购物卡</span></li>
								<li style={sty.my_li1}><i className='ding icon iconfont'>&#xe638;</i><span style={sty.my_span2}>优惠券</span></li>
								<li style={sty.my_li1}><i className='ding icon iconfont'>&#xe61e;</i><span style={sty.my_span2}>积分</span></li>
								<li style={sty.my_li1}><i className='ding icon iconfont'>&#xe704;</i><span style={sty.my_span2}>卡券充值</span></li>
							</ul>
						</div>
					)
				}
			})
			
			
			var Parthh=React.createClass({
				render:function(){
					return(
						<div style={sty.my_parth}>
							<ul style={sty.my_xin} >
								<li style={sty.my_li2}><p style={sty.my_p}><img style={sty.my_img1} src='../img/my_03.png'/></p>个人信息<br/><br/>收货地址管理</li>
								<li style={sty.my_li2}><p style={sty.my_p}><img style={sty.my_img1} src='../img/my_04.png'/></p>曾经够买</li>
								<li style={sty.my_li2}><p style={sty.my_p}><img style={sty.my_img1} src='../img/my_05.png'/></p>积分商城</li>
								<li style={sty.my_li2}><p style={sty.my_p}><img style={sty.my_img1} src='../img/my_06.png'/></p>帮助中心</li>
								<li style={sty.my_li2}><p style={sty.my_p}><img style={sty.my_img1} src='../img/my_07.png'/></p>意见反馈</li>
							</ul>
						</div>
					)
				}
			})
			
			
			
			
			
			ReactDOM.render(<Demo/>,document.getElementById('out'))