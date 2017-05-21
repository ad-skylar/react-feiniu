var sty = {
    g_header: {
        height: '1rem',
        background: '#fff',
        position: 'relative',
        borderBottom: '1px solid #d5d5d5',
        width: '100%'
    },
    g_h1: {
        color: '#333',
        width: '80%',
        margin: '0 auto',
        textAlign: 'center',
        fontWeight: '400',
        fontSize: '0.5rem',
        lineHeight: '1rem'
    },
    g_foot: {
        position: 'fixed',
        bottom: '0',
        borderTop: '1px solid #d5d5d5',
        width: '100%',
        left: '0',
        display: 'flex',
        alignItems: 'center',
        height: '1rem',
        background: '#fff',
        fontSize: '0.3rem',
        zIndex: '10'
    },
    g_all: {whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', paddingLeft: '0.3rem'},
    g_label: {
        marginRight: '0.2rem',
        transform: 'scale(1.1)',
        width: '2.5rem',
        height: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    g_ipt: {
        position: 'absolute',
        width: '0.5rem',
        height: '0.5rem',
        right: '1.7rem',
        backgroundColor: 'inherit',
        fontSize: 'inherit',
        outline: '0'
    },
    g_zong: {flex: '1', textAlign: 'right'},
    g_zong_price: {float: 'right'},
    g_z_price: {
        color: '#d7063b',
        minWidth: '1.5rem',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontSize: '0.5rem'
    },
    g_jie: {
        minWidth: '2rem',
        fontSize: '0.4rem',
        height: '1rem',
        marginLeft: '0.2rem',
        background: '#d7063b',
        color: '#fff',
        textAlign: 'center',
        lineHeight: '1rem'
    },
    g_num: {fontSize: '0.3rem', color: '#fff'},
    g_con: {width: '100%', margin: '0 auto', background: '#eee'},

}


var Demo = React.createClass({
    render: function () {
        return (
            <div>
                <Header/>

                <Con/>
            </div>
        )
    }
})

var Header = React.createClass({
    render: function () {
        return (
            <div style={sty.g_header}>
                <span className='g_back'></span>
                <h1 style={sty.g_h1}>购物车</h1>
            </div>
        )
    }
})

var Con = React.createClass({
    componentWillMount: function () {
        $.getJSON("../data/product_t.json", function (data) {
            var div = "";
            var _ids;
            for (var i = 0; i < localStorage.length; i++) {
                _ids = localStorage.key(i);
                div += "<div class='g_cart' id='" + localStorage.key(i) + "'><div class='g_shop'><div class='g_main'><div class='g_radio'><input type='checkbox' class='g_ipt1'/></div><div class='g_img'><div class='g_s_img'><img class='g_shop_img' src='" + data["goodId"][_ids]["img"][0] + "'/></div></div><div class='g_abc'><div class='g_abc1'><h4 class='g_h4'><div class='g_div1'><p class='g_p'>" + data["goodId"][_ids]["detal"] + "</p></div><i class='mui-icon mui-icon-trash g_i2'></i></h4></div><div class='g_abc2'><div class='g_abc2_price'><p class='g_abc2_price_p'><span class='g_abc2_price_span'>" + data["goodId"][_ids]["price"] + "</span></p></div><div class='g_abc2_price_num'><div class='g_abc2_price_jian'>-</div><input type='text' style='width: 0.8rem' class='g_abc2_price_shu' value='" + localStorage.getItem(_ids) + "'/><div class='g_abc2_price_jia'>+</div></div></div></div></div></div></div>"
            }
            //console.log(localStorage.key(i))
            $("#nei").append(div)
            div = "";
        })
    },
    render: function () {
        return (
            <div>
                <div style={sty.g_con} id='nei'>

                </div>
                <div style={sty.g_foot}>
                    <div style={sty.g_all}>
                        <label style={sty.g_label}>
                            <input style={sty.g_ipt} type='checkbox' className="s_all"/>全选
                        </label>
                    </div>
                    <div style={sty.g_zong}>
                        <div style={sty.g_zong_price}>
                            总计:<span style={sty.g_z_price} className="zongji">￥0.00</span>
                        </div>
                    </div>
                    <div style={sty.g_jie}>
                        结算<span style={sty.g_num}></span>
                    </div>
                </div>
            </div>


        )
    },
    componentDidMount: function () {
        window.setTimeout(function () {
            $("input[type='checkbox']").prop("checked", true);
            //全选框点击
            $(".s_all ").click(function () {
                for (var i = 0; i < $(".g_ipt1").length; i++) {
                    var _arr = [];
                    if (this.checked) {
                        $(".g_ipt1")[i].checked = true;
                    } else {
                        $(".g_ipt1")[i].checked = false;
                    }
                }
                sum()
            })
            //判断复选框是否被选中
            for (var i = 0; i < $(".g_cart").length; i++) {
                $(".g_ipt1").click(function () {
                    if (this.checked) {
                        var flag = 0;
                        for (var j = 0; j < $(".g_ipt1").length; j++) {
                            if (!$(".g_ipt1")[j].checked) {
                                flag = 1;
                            }
                        }
                    }
                    if (flag == 0) {
                        $(".s_all")[0].checked = true;
                    } else {
                        $(".s_all")[0].checked = false;
                    }
                    sum();
                })

            }
            $(".g_i2").on("tap", function () {
                if (window.confirm("是否删除？")) {
                    var id = $(this).parents(".g_cart").attr("id");
                    $(".g_cart").eq($(id).selector).css('display', 'none');
                    localStorage.removeItem(id);
                    sum();
                }
            })
            //减
            $(".g_abc2_price_jian").on("tap", function () {
                var id = $(this).parents(".g_cart").attr("id");
                var val = $(this).parents(".g_cart").find(".g_abc2_price_shu").val();
                if ($(this).parents(".g_cart").find(".g_abc2_price_shu")[0].value > 1) {
                    $(this).parents(".g_cart").find(".g_abc2_price_shu")[0].value = --val;
                }
                var num = $(this).parents(".g_cart").find(".g_abc2_price_shu")[0].value;
                localStorage.setItem(id, num);
                sum()
            })
            //加
            $(".g_abc2_price_jia").on("tap", function () {
                var id = $(this).parents(".g_cart").attr("id");
                var val = $(this).parents(".g_cart").find(".g_abc2_price_shu").val();
                $(this).parents(".g_cart").find(".g_abc2_price_shu")[0].value = ++val;
                var num = $(this).parents(".g_cart").find(".g_abc2_price_shu")[0].value;
                localStorage.setItem(id, num);
                sum()
            });
            //安全过滤
            function filter() {
                var _txt = document.getElementsByTagName("input");
                for (var j = 0; j < _txt.length; j++) {
                    if (_txt[j].type == "text") {
                        var _val = 0;
                        _txt[j].onfocus = function () {
                            _val = this.value;
                        }
                        _txt[j].onchange = function () {
                            if (/^\d+$/.test(this.value)) {
                                if (parseInt(this.value) > 0) {
                                    var id = $(this).parents(".g_cart").attr("id");
                                    var val = $(this).parents(".g_cart").find(".g_abc2_price_shu").val();
                                    $(this).parents(".g_cart").find(".g_abc2_price_shu")[0].value = val;
                                    var num = $(this).parents(".g_cart").find(".g_abc2_price_shu")[0].value;
                                    localStorage.setItem(id, num);
                                    sum();
                                } else {
                                    this.value = _val;
                                }
                            } else {
                                this.value = _val;
                            }
                        }
                    }
                }
            }
            filter();
            //计算金额
            function sum() {
                var count = 0;
                var zongji = 0, danjia = 0;
                for (var j = 0; j < $(".g_ipt1").length; j++) {
                    if ($(".g_ipt1").eq(j).is(':checked')) {
                        count = Number($(".g_abc2_price_shu").eq(j).val());
                        danjia = Number($(".g_abc2_price_span").eq(j).text());
                        //判断是否为删除按钮
                        // if ($('.g_i2')) {
                        //     zongji -= count * danjia;
                        // } else {
                            zongji += count * danjia;
                        // }
                    }
                }
                console.log(zongji)
                $(".zongji").html('¥ ' + zongji + '.00')
            }
            sum();
        }, 20)
    }
})
ReactDOM.render(<Demo/>, document.getElementById('out'))
			
			
			
			
			