var style1={
	d_head:{
		'z-index': '66',
 		'min-height':'1.5rem',
	},
	d_title:{
		'height':'1rem',
		'lineHeight':'1rem',
		'fontSize':'1rem',
		'color':'#999',
	},
	d_title2:{
		'fontSize':'0.5rem',
		'marginLeft':'0.3rem',
		'color':'#999',
	 
	},
	d_title1:{
		'float':'left',
		'width':'4rem',
		'marginLeft':'16%',
		'fontSize':'0.46rem',
		
	},
	d_span:{
		'height':'1rem',
		'lineHeight':'1rem',
		'fontSize':'0.36rem',
		'marginRight':'0.4rem',
		"color":"#000"
		
	},
	d_img:{
		'width':'100%'
	},
	swiper:{
		'height':'9rem',
		'marginTop':'1rem'
	}
}
var _id=location.search.split('=')[1];
var Detail=React.createClass({
	componentWillMount:function(){
		var banner='',_intro='';
		console.log(_id)
	 	$.getJSON("../data/product_t.json",function (data) {
		 		console.log(data);
		 		for(var i=0;i<data.goodId[_id]["img"].length;i++){
		 			banner+='<div class="swiper-slide"><img src='+data.goodId[_id]["img"][i]+'></div>'
		 		}
		 		
	      		_intro='<p>'+data.goodId[_id]["detal"]+'</p><p>'+data.goodId[_id]["title"]+'</p><p class="d_price">￥'+data.goodId[_id]["price"]+'</p'
		 		$("#swiper2").html(banner);
		 		$("#intro").html(_intro);
	  })
	 	
	 	 
	},
	render:function(){
		return(
			<div style={style1.d_head}>
			  <header style={style1.d_title} className="mui-bar mui-bar-nav">
		    	<a style={style1.d_title}  className="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		    	<div style={style1.d_title1}>
			    	<span style={style1.d_span} >标题</span>
			    	<span style={style1.d_span} >详情</span>
			    	<span style={style1.d_span} >评价</span>
		    	</div>
		    	<a style={style1.d_title2}  className="mui-pull-left">...</a>
			  </header>
			  <div className="swiper-container swiper-container1" style={style1.swiper}>
				    <div className="swiper-wrapper" id="swiper2">      
				    </div>
				    <div className="swiper-pagination"></div>			    
				</div>
				<div id="intro"></div>
				<Bottom/>
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
	    pagination: '.swiper-pagination',   
	 	},3000)	 
	  })       
	}
})
//底部
var style3={
	b_a:{
		'fontSize':'0.8rem'
	},
	b_span:{
		'fontSize':'0.4rem'
	},
	b_add:{
		'fontSize':'0.5rem',
		
	}
}
var Bottom=React.createClass({
	render:function(){
		return(<div style={{'height':'1.5rem'}}>
				<nav className="mui-bar mui-bar-tab" style={{"height":"1.5rem"}}>
				    <a className="mui-tab-item mui-active" style={{"width":"20%"}}>
				        <span  style={style3.b_a} className="mui-icon iconfont icon-shouye"></span>	       
				    </a>
				    <a className="mui-tab-item" style={{"width":"20%"}}>
				        <span  style={style3.b_a} className="mui-icon iconfont icon-fenlei1"></span>
				        
				    </a>
				    <a className="mui-tab-item"  style={{"width":"20%"}} id="car">
				        <span  style={style3.b_a} className="mui-icon iconfont icon-gouwuche"></span>			        
				    </a>
				   <a className="mui-tab-item"  style={{"width":"30%"}} id="car">
				    <div id='addCar'>加入购物车</div>
				    </a>
				  
			</nav>
			 
		</div>)
	},
	componentDidMount:function(){
		
		var num=localStorage.getItem(_id)
		console.log(num)
		num=Number(num)
		
		$("#addCar").click(function(){
			num=num+1;
			var _num=String(num);
			var oid=String(_id);
			localStorage.setItem(oid,_num)
		})
		$("#car").click(function(){
			alert(1)
			window.location.href="shopping.html"
		})
	}

})

 ReactDOM.render(<Detail/>,document.getElementById("detail"))
