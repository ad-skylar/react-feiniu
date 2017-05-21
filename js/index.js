var style={
		h_head:{
			'min-height': '0.5rem',
		    'background-color': 'rgba(255,255,255,0.2)',
		    'width': '100%',
		    'z-index': '11',
		   'box-shadow':'0 0',

		},
		h_input:{
			"width":"4.5rem",
			"display":"inline-block",
			"margin-left":".07rem",
			"background":"#fff",
		   ' border': '#d5d5d5 solid 1px',
		    'border-radius': '.03rem',
		  	'height':'.36rem',
		  	'margin-top':'.1rem',
			"fontSize":"0.28rem"
		},
		h_font:{
			'font-size': '0.28rem',
			'display': 'inline-block',
			"line-height":"0.36rem",
			"color":"#fff",
		},
		h_banner:{
			"height":"3rem"
		},
		h_bg:{
			"background":"#fff",	
			'border':'none',
			'lineHeight':'0.5rem',
			'fontSize':'0.28rem',
			'color':"#eee",
			'height':"100%"
		},
		h_dot:{
			"marginLeft":'2rem'
		}
}
//头部和banne
var Index=React.createClass({
	render:function(){
		return(
			<div>
				<Head/>
				<List/>
				<News/>
				<Skill/>
				<Special/>
				<S_nav/>
				<H_list/>
				<Bottom/>
			</div>
		)
	}
})
var Head=React.createClass({
	componentWillMount:function(){
		var banner='';
	 	$.getJSON("data/product.json",function (data) {
		 		console.log(data);
		 		for(var i=0;i<data.banner.length;i++){
		 			banner+='<div class="swiper-slide"><img src='+data.banner[i]+'></div>'
		 		}
	      		
		 		$("#swiper").html(banner);
	  	})
	 	  window.onscroll = function () {
	 	  	if (document.documentElement.scrollTop||document.body.scrollTop>=$("header")[0].offsetHeight) {
            	$("header")[0].style.background="#d7063b"
        	}else{
        		$("header")[0].style.background="rgba(255,0,0,0.2)"
        	}
	 	  }
	 	 
	},
	render:function(){
		return(
			<div  style={style.h_head} className="banner">
				<header style={style.h_head} className="mui-bar mui-bar-nav">
			    	<span style={style.h_font} className="mui-action-back mui-icon mui-icon-location mui-pull-left">郑州</span>
			    	<div className="icon iconfont icon-search" style={style.h_input}>
    					<input style={style.h_bg}  placeholder="手机"/>
					</div>
			   		<span id="login" className="mui-icon mui-pull-right" style={style.h_font}>登陆</span>
				</header>
				<div className="swiper-container swiper-container1">
				    <div className="swiper-wrapper" id="swiper">      
				    </div>
				    <div className="swiper-pagination" style={style.h_dot}></div>			    
				</div>
			</div>
		)
	},
	 componentDidMount:function(){
 	window.setTimeout(function(){
	 	var mySwiper = new Swiper ('.swiper-container1', {
	    direction: 'horizontal',
	    loop: true,
	    autoplay:2000,
	    // 如果需要分页器
	    pagination: '.banner .swiper-pagination',   
	 	},3000)	 
	  })       
	}
})
//九宫格
var List=React.createClass({
	render:function(){
		return(
		<div style={{"min-height":'.8rem',"background":"#fff"}}>
			<ul style={{"background":"#fff"}} className="mui-table-view mui-grid-view mui-grid-9 nine">
				<li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2">
				    <a href="#">			
				        <img className="mui-icon" src="//img04.fn-mart.com/pic/a13e133a1fbadcaee89d/hz8zzz7nFTfdBlUgjz/1YoaSRLG2avRTa/CsmRslgGzsaAbiGUAABCLjUbLhk163_org_q75s500.png"/>
				        <div className="mui-media-body">秒杀</div>
				    </a>
				</li>
				<li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2">
				    <a href="#">
				        <img className="mui-icon" src="//img02.fn-mart.com/pic/1d49133a1fbcdcb5e1c0/BT62nn72_zClhdZMX2/sYSReGfa2RFaTR/CsmRslgGzw6APNqBAAA6-fE9ybQ614_org_q75s500.png"/>
				        <div className="mui-media-body">服装城</div>
				    </a>
				</li>
				<li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2">
				    <a href="#">
				        <img className="mui-icon" src="//img03.fn-mart.com/pic/39cb133d122e19abf50e/hTqnzz7TvnfdkMUdjn/59eaeajGh9OaCG/CsmRsljAw0eARSm_AABgJOWbZnA721_org_q75s500.png"/>
				        <div className="mui-media-body">商品分类</div>
				    </a>
				</li>
				<li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2">
				    <a href="#">
				       <img className="mui-icon" src="//img04.fn-mart.com/pic/6234133a1fb7dcb9a99e/hn8zzz7zvntgBdZlX2/5YmRSyLGzaDany/CsmRsVgGzvmAQczEAAAwGHmm3hw450_org_q75s500.png"/>
				        <div className="mui-media-body">曾经购买</div>
				    </a>
				</li>			
				<li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2">
				    <a href="#">
				        <img className="mui-icon" src="//img03.fn-mart.com/pic/7ec5133a1fb9dcb76d6a/hTHnzz1T_2fMKdVlL2/sYSReGfamR0apx/CsmRr1gGzyaACpE2AAAx0f1Z-FM483_org_q75s500.png"/>
				        <div className="mui-media-body">我的收藏</div>
				    </a>
				</li>
				<li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2">
				    <a href="#">
				        <img className="mui-icon" src="//img03.fn-mart.com/pic/d859133a1fb4dcb105dd/hTqTnns2DnLdBgZMtT/59oGmGCGmyWGgG/CsmRsFgGzuiAMXNnAAA7ECbe2X4351_org_q75s500.png"/>
				        <div className="mui-media-body">领券中心</div>
				    </a>
				</li>
				<li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2">
				    <a href="#">
				        <img className="mui-icon" src="//img04.fn-mart.com/pic/1243133a1fbcdcb6e7b7/Bz6Tnn1zvzfdhMugf2/sioyeytaSRpGla/CsmRsFgGzx6AYj7GAAAqqyDowCY988_org_q75s500.png"/>
				        <div className="mui-media-body">电器城</div>
				    </a>
				</li>
				<li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2">
				    <a href="#">
				        <img className="mui-icon" src="//img02.fn-mart.com/pic/0ea7133a1fb3dcbe0985/Kn8Tnn7zvTCdhduML2/1YSGmyfGeG0RpY/CsmRr1gGzzKAbOsTAAA2oimiUMU499_org_q75s500.png"/>
				        <div className="mui-media-body">我的飞牛</div>
				    </a>
				</li>
	   		 </ul>
		</div>
		)
	},	
})
//News
var style3={
	news:{
		'height':'1rem'	,	
		'marginBottom':'0.3rem',
		'background':'#fff'
	},
	s_img:{
		'float':'left'
	},
	swiper2:{
		'height':'1rem'	,
		'float':'left',
		'lineHeight':'1rem',	
	}
}
var News=React.createClass({
	render:function(){
		return(
			<div style={style3.news}>
				<img style={style3.s_img} src="//img03.fn-mart.com/pic/845a133a1fbadc003d65/h28z22sT_nLdhlugOT/5xSGeaCRzGvRdy/CsmRslgGyDuALlAhAAAaj-B9XqU310_org_q75s500.png"/>
				<div className="swiper-container swiper-container2" style={style3.swiper2}>
				    <div className="swiper-wrapper">
				        <div className="swiper-slide"><p style={{'color':'rgb(219,56,76)'}}>端午粽情钜惠 好礼0元领</p></div>
				        <div className="swiper-slide"><p style={{'color':'rgb(219,56,76)'}}>家电清凉节 满399减50</p></div>
				        <div className="swiper-slide"><p style={{'color':'rgb(219,56,76)'}}>母婴好货 1元换购</p></div>
				    </div>
				</div>
			</div>
		)
	},
	componentDidMount:function(){
		 var mySwiper2 = new Swiper ('.swiper-container2', {
    	direction: 'vertical',
    	 autoplay:2000,
    	loop: true,
  })        
	}
})
//秒杀
var style4={
	s_title:{
		'margin-left': '0.3rem'
	},
	skill:{
		minHeight:"1.78rem",
		"overFlow":"hidden",
	},
	s_img:{
		'width':'0.7rem',
		"height":"0.3rem",
		'margin-right': '.2rem',
	},
	s_h4:{
		"fontSize":"0.28rem",
		'margin-right': '.2rem',
	}
}
var Skill=React.createClass({
	componentWillMount:function(){
		var h_skill='';
	 	$.getJSON("data/product_t.json",function (data) {
		 		console.log(data);
		 		for(var i=0;i<data.skill.length;i++){
		 			h_skill+='<div class="swiper-slide" style="margin-left:0.1rem"><img src='+data.skill[i]['img']+'><p class="price">￥'+data.skill[i]['price']+'</p><p class="r_price">￥'+data.skill[i]['r_price']+'</p></div>'
		 		}
		 	
		 		$("#skill").html(h_skill);
	  	})
	},
	render:function(){
		var _this = this;
		return(
			<div style={style4.skill}>
				<div style={style4.s_title}  className="mui-table-view mui-grid-view mui-grid-9">
					<img style={style4.s_img} className="fl" src="//member-fnapp.feiniu.com/images/home_icon/kill_icon_2x.png"/>
					<h4 style={style4.s_h4}  className="fl">9点场</h4>		
					<div className="fl ms_time">
				        <span id="hh">00</span>
				        <span id="mm">00</span>
				        <span className="l_span" id="ss">00</span>
					</div> 
			        <div className="fl skill_arro"> 
			        	<p className="fl">限时限量</p> 
			        	<img src="//mstatic01.fn-mart.com/static/img/v2/index/seckill_more.png"/>
			        </div> 
				</div>
				<div className="swiper-container swiper-container3">
				    <div className="swiper-wrapper" id="skill"></div>
				</div>
			</div>
		)
	},
	componentDidMount:function(){
		window.setTimeout(function(){
			var mySwiper3 = new Swiper ('.swiper-container3', {
				direction: 'horizontal',
		    	slidesPerView: 3,
		    	coverflow: {
		            rotate: 30,
		            stretch: 10,
		            depth: 60,
		            modifier: 2
		        }
			},2000)	 
 		 })   
 		 countDown("2017/5/10 19:30:50",$("#hh"),$("#mm"),$("#ss"))
	}
})
//特色频道
var Special=React.createClass({
	componentWillMount:function(){
		var special='';
	 	$.getJSON("data/product.json",function (data) {
		 		for(var i=0;i<data.special.length;i++){
		 			special+='<li class="speci_img"><a href="#"><img src='+data.special[i]+'></a></li>'
		 		}     		
		 		$("#special").html(special);
	  	})
	},
	render:function(){
		return(
			<div style={{"min-height":"1rem"}}>
				<div className="s_left">
					<p className="line line1" style={{'border-top-color': '#ae1f7d'}}></p>
				    <p style={{'color':'#ae1f7d','margin':' 0 .14rem'}}>  特色频道</p>
					<p className="line line2" style={{'border-top-color':' #ae1f7d'}}>
					</p>
				</div>
				<ul id="special">
					
				</ul>
			</div>
			)
	}
})
var S_nav=React.createClass({
	render:function(){
		return(
				<div className="swiper-container swiper-container4" id="swiper4">
				    <div className="swiper-wrapper">
				        <div className="swiper-slide"><img src="https://img03.fn-mart.com/pic/84d0133d4cc727c169fe/K282nn7n_TLMKlVgXn/1YmGoyERPYOaB9/CsmRslkC_TaAOICXAAK-BhWuRr4604_org_q75s500.jpg" /></div>
				        <div className="swiper-slide"><img src="https://img03.fn-mart.com/pic/1626133d4cc82ac16f25/Kn6z2212FTflkMVMOz/1iSRoaQRPYJGBa/CsmRsVkDEJ6AZaJWAAIA0efdzUM942_org_q75s500.jpg" /></div>
				    </div>
    				<div className="swiper-pagination" style={style.h_dot}></div>
				</div>
			)
	},
	componentDidMount:function(){
		var mySwiper = new Swiper ('.swiper-container4', {
		    direction: 'horizontal',
		    loop: true,
		    
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
  		})       
	}
})
//列表

var H_list=React.createClass({
	componentWillMount:function(){
		var _list='';
		
	 	$.getJSON("data/product.json",function (data) {
		 		for(var i=0;i<data.list.length;i++){
		 			_list+='<li class="h_list" id='+data.list[i]["id"]+'><a href="##"><img class="imgs"src='+data.list[i]['img']+'>'+
		 			'<p  class="p2">'+data.list[i]['detal']+'</p><p class="h_text"><span style="color: #d7063b;margin-right:0.05rem">￥</span><span class="h_price">'+data.list[i]['price']+'</span><a href="##" class="car"><i class="icon iconfont icon-gouwuche"></i></a></p></li>'
		 		}     		
		 		$("#h_list").html(_list);
		 		$(".imgs").click(function(){
		 			window.location.href='html/detail.html?id='+$(this).parents(".h_list").attr("id")+'';
		 		})
		 			var num=0;
				$(".car").click(function(){
				console.log($(this).parents(".h_list").attr("id"))
			 		var _ids=localStorage.key($(this).parents(".h_list").attr("id"));
			 		if(localStorage.getItem(_ids)){
			 			num=localStorage.getItem(_ids)
			 			num=Number(num)
			 		}else{
			 			num=0
			 		}
					num=num+1;
					var _num=String(num);
					var oid=$(this).parents(".h_list").attr("id");
					localStorage.setItem(oid,_num);
					
				})
				$("#car").click(function(){
					alert(1)
					window.location.href="shopping.html"
				})
	  	})
	 	
	},
	render:function(){
		return(
			<div style={{"height":"auto"}}>
				<div className="s_left">
					<p className="line line1" style={{'border-top-color': '#ff6162'}}></p>
				    <p style={{'color':'#ff6162','margin':' 0 .14rem'}}>主题馆</p>
					<p className="line line2" style={{'border-top-color':' #ff6162'}}>
					</p>
				</div>
				<ul id="h_list">
					
				</ul>
			</div>
			)
	},
	
})
//底部
var Bottom=React.createClass({
	render:function(){
		return(<div style={{'height':'1rem'}}>
				<nav className="mui-bar mui-bar-tab" style={{'height':'1rem'}}>
				<a className="mui-tab-item mui-active">
				        <span className="mui-icon iconfont icon-shouye"></span>
				        <span className="mui-tab-label">首页</span>
				    </a>
				    <a className="mui-tab-item mui-active" ref="h_list" >
				        <span className="mui-icon iconfont icon-fenlei1"></span>
				        <span className="mui-tab-label">列表</span>
				    </a>
				    <a className="mui-tab-item" ref="t_index">
				        <span className="mui-icon mui-icon-phone"></span>
				        <span className="mui-tab-label">T恤节</span>
				    </a>
				    <a className="mui-tab-item" ref="mycar">
						<span className="mui-icon iconfont icon-gouwuche"></span>
				        <span className="mui-tab-label">购物车</span>
				    </a>
				    <a className="mui-tab-item" ref="h_person">
				        <span className="mui-icon mui-icon-person"></span>
				        <span className="mui-tab-label">个人中心</span>
		    		</a>
				</nav>
			
		</div>)
	},
	componentDidMount:function(){

		$(this.refs.h_list).on("tap",function(){
			window.location.href="html/i_item.html"
		})
		$(this.refs.h_person).on("tap",function(){
			window.location.href="html/my.html"
		})
		$(this.refs.mycar).on("tap",function () {
            window.location.href="html/shopping.html"
        })
        $(this.refs.t_index).on("tap",function () {
        	alert(1)
           window.location.href="html/T-index.html"
        })
        $("#login").on("tap",function () {
          window.location.href="html/login.html"
        })
	}
})

 
ReactDOM.render(<Index/>,document.getElementById("container"))
