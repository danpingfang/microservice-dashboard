<template>
  <div class="CenterB">
    <div class="current-page">
      <h3 class="project"><i class="icon icon-logout"></i> 表格管理</h3>
    </div>
	  <div class="layui-field-box">
		<table class="site-table">
	      <thead>
		    <tr>
			  <th><input type="checkbox" id="selected-all"></th>
			  <th>所属分类</th>
			  <th>标题</th>
			  <th>作者</th>
			  <th>创建时间</th>
			  <th>浏览量</th>
			  <th>状态</th>
			  <th>排序值</th>
			  <th>置顶</th>
			  <th>操作</th>
		    </tr>
	      </thead> 
	      <tbody>
	        <tr>
			  <td><input type="checkbox"></td>
			  <td>Layui</td>
			  <td>
				<a>演示站点发布成功啦。</a>
			  </td>
			  <td>Beginner</td>
			  <td>2016-11-16 11:50</td>
			  <td>1298</td>
			  <td>正常</td>
			  <td>99</td>
			  <td style="text-align:center;"><i class="layui-icon" style="color:green;"></i></td>
			  <td>
				<a target="_blank" class="layui-btn layui-btn-normal layui-btn-mini">预览</a>
				<a class="layui-btn layui-btn-mini">编辑</a>
				<a data-id="1" data-opt="del" class="layui-btn layui-btn-danger layui-btn-mini">删除</a>
			  </td>
			</tr>
			<tr>
			  <td><input type="checkbox"></td>
			  <td>Layui</td>
			  <td>
				<a>神5飞天震寰宇</a>
			  </td>
			  <td>就是我</td>
			  <td>2016-11-18 10:18</td>
			  <td>74</td>
			  <td>正常</td>
			  <td>0</td>
			  <td style="text-align:center;"><i class="layui-icon" style="color:green;"></i></td>
			  <td>
				<a target="_blank">预览</a>
				<a>编辑</a>
				<a data-id="19" data-opt="del">删除</a>
			  </td>
			</tr>
			<tr>
			  <td><input type="checkbox"></td>
			  <td>C#</td>
			  <td>
				<a>验证（C#和正则表达式）</a>
			  </td>
			  <td>Beginner</td>
			  <td>2016-11-17 14:20</td>
			  <td>144</td>
			  <td>正常</td>
			  <td>0</td>
			  <td style="text-align:center;"><i class="layui-icon" style="color:green;"></i></td>
			  <td>
				<a target="_blank">预览</a>
				<a>编辑</a>
				<a data-id="8" data-opt="del">删除</a>
			  </td>
			</tr>
			<tr>
			  <td><input type="checkbox"></td>
			  <td>博客</td>
			  <td>
				<a>博客的功能点收集，欢迎留言。</a>
			  </td>
			  <td>Beginner</td>
			  <td>2016-11-16 16:43</td>
			  <td>663</td>
			  <td>草稿</td>
			  <td>0</td>
			  <td style="text-align:center;"><i class="layui-icon" style="color:green;"></i></td>
			  <td>
				<a target="_blank">预览</a>
				<a>编辑</a>
				<a data-id="4" data-opt="del">删除</a>
			  </td>
			</tr>
			<tr>
			  <td><input type="checkbox"></td>
			  <td>C#</td>
			  <td>
				<a>1发顺丰范德萨</a>
			  </td>
			  <td>31</td>
			  <td>2016-11-18 13:22</td>
			  <td>138</td>
			  <td>草稿</td>
			  <td>213</td>
			  <td style="text-align:center;"><i class="layui-icon" style="color:red;">ဇ</i></td>
			  <td>
				<a target="_blank">预览</a>
				<a>编辑</a>
				<a data-id="20" data-opt="del">删除</a>
			  </td>
			</tr>
			<tr>
			  <td><input type="checkbox"></td>
			  <td>JavaScript</td>
			  <td>
				<a>124324325</a>
			  </td>
			  <td>123</td>
			  <td>2016-11-19 22:03</td>
			  <td>0</td>
			  <td>草稿</td>
			  <td>0</td>
			  <td style="text-align:center;"><i class="layui-icon" style="color:red;">ဇ</i></td>
			  <td>
				<a target="_blank">预览</a>
				<a>编辑</a>
				<a data-id="23" data-opt="del">删除</a>
			  </td>
			</tr>
			<tr>
			  <td><input type="checkbox"></td>
			  <td>Layui</td>
			  <td>
				<a>qweqweq</a>
			  </td>
			  <td>qweqwe</td>
			  <td>2016-11-19 00:35</td>
			  <td>59</td>
			  <td>正常</td>
			  <td>0</td>
			  <td style="text-align:center;"><i class="layui-icon" style="color:red;">ဇ</i></td>
			  <td>
				<a target="_blank">预览</a>
				<a>编辑</a>
				<a data-id="22" data-opt="del">删除</a>
			  </td>
			</tr>
			<tr>
			  <td><input type="checkbox"></td>
			  <td>MongoDB</td>
			  <td>
				<a>标题标题标题标题标题</a>
			  </td>
			  <td>作者</td>
			  <td>2016-11-18 15:47</td>
			  <td>4</td>
			  <td>草稿</td>
			  <td>0</td>
			  <td style="text-align:center;"><i class="layui-icon" style="color:red;">ဇ</i></td>
			  <td>
				<a target="_blank">预览</a>
				<a>编辑</a>
				<a data-id="21" data-opt="del">删除</a>
			  </td>
			</tr>
			<tr>
			  <td><input type="checkbox"></td>
			  <td>asp.net mvc</td>
			  <td>
				<a>asp.net mvc 批量保存 服务端获取客户端传进的数组参数的处理方法</a>
			  </td>
			  <td>Beginner</td>
			  <td>2016-11-17 14:33</td>
			  <td>83</td>
			  <td>草稿</td>
			  <td>0</td>
			  <td style="text-align:center;"><i class="layui-icon" style="color:red;">ဇ</i></td>
			  <td>
				<a arget="_blank">预览</a>
				<a>编辑</a>
				<a data-id="18" data-opt="del">删除</a>
			  </td>
			</tr>
			<tr>
				<td><input type="checkbox"></td>
				<td>asp.net mvc</td>
				<td>
					<a>MVC Areas出现“找到多个与名为“Home”的控制器匹配的类型”错误的解决方法</a>
				</td>
				<td>Beginner</td>
				<td>2016-11-17 14:32</td>
				<td>149</td>
				<td>正常</td>
				<td>0</td>
				<td style="text-align:center;"><i class="layui-icon" style="color:red;">ဇ</i></td>
				<td>
					<a target="_blank">预览</a>
					<a>编辑</a>
					<a data-id="17" data-opt="del">删除</a>
				</td>
			</tr>
			<tr>
				<td><input type="checkbox"></td>
				<td>Jquery</td>
				<td>
					<a>将一个form表单序列化成一个对象.</a>
				</td>
				<td>Beginner</td>
				<td>2016-11-17 14:32</td>
				<td>86</td>
				<td>正常</td>
				<td>0</td>
				<td style="text-align:center;"><i class="layui-icon" style="color:red;">ဇ</i></td>
				<td>
					<a target="_blank">预览</a>
					<a>编辑</a>
					<a data-id="16" data-opt="del">删除</a>
				</td>
			</tr>
			<tr>
				<td><input type="checkbox"></td>
				<td>asp.net mvc</td>
				<td>
					<a>asp.net mvc 下使用过滤器 Filter 实现页面跳转</a>
				</td>
				<td>Beginner</td>
				<td>2016-11-17 14:31</td>
				<td>69</td>
				<td>正常</td>
				<td>0</td>
				<td style="text-align:center;"><i class="layui-icon" style="color:red;">ဇ</i></td>
				<td>
					<a target="_blank">预览</a>
					<a>编辑</a>
					<a data-id="15" data-opt="del">删除</a>
				</td>
			</tr>
			<tr>
				<td><input type="checkbox"></td>
				<td>杂七杂八</td>
				<td>
					<a>开发环境、生产环境、测试环境的基本理解和区别</a>
				</td>
				<td>Beginner</td>
				<td>2016-11-17 14:30</td>
				<td>37</td>
				<td>正常</td>
				<td>0</td>
				<td style="text-align:center;"><i class="layui-icon" style="color:red;">ဇ</i></td>
				<td>
					<a target="_blank">预览</a>
					<a>编辑</a>
					<a data-id="14" data-opt="del">删除</a>
				</td>
			</tr>
			<tr>
				<td><input type="checkbox"></td>
				<td>JavaScript</td>
				<td>
					<a>JavaScript JS 验证身份证号的正确性</a>
				</td>
				<td>Beginner</td>
				<td>2016-11-17 14:29</td>
				<td>44</td>
				<td>草稿</td>
				<td>0</td>
				<td style="text-align:center;"><i class="layui-icon" style="color:red;">ဇ</i></td>
				<td>
					<a target="_blank">预览</a>
					<a>编辑</a>
					<a data-id="13" data-opt="del">删除</a>
				</td>
			</tr>
			<tr>
				<td><input type="checkbox"></td>
				<td>CSS</td>
				<td>
					<a>CSS实现垂直居中6种方法</a>
				</td>
				<td>Beginner</td>
				<td>2016-11-17 14:27</td>
				<td>62</td>
				<td>正常</td>
				<td>0</td>
				<td style="text-align:center;"><i class="layui-icon" style="color:red;">ဇ</i></td>
				<td>
					<a target="_blank">预览</a>
					<a>编辑</a>
					<a data-id="12" data-opt="del">删除</a>
				</td>
			</tr>
			<tr>
				<td><input type="checkbox"></td>
				<td>JavaScript</td>
				<td>
					<a>在JavaScript 中，给日期加一天</a>
				</td>
				<td>Beginner</td>
				<td>2016-11-17 14:26</td>
				<td>37</td>
				<td>正常</td>
				<td>0</td>
				<td style="text-align:center;"><i class="layui-icon" style="color:red;">ဇ</i></td>
				<td>
					<a target="_blank">预览</a>
					<a>编辑</a>
					<a data-id="11" data-opt="del">删除</a>
				</td>
			</tr>
			<tr>
				<td><input type="checkbox"></td>
				<td>C#</td>
				<td>
					<a>[C#] 对List 取交集、连集及差集</a>
				</td>
				<td>Beginner</td>
				<td>2016-11-17 14:26</td>
				<td>54</td>
				<td>正常</td>
				<td>0</td>
				<td style="text-align:center;"><i class="layui-icon" style="color:red;">ဇ</i></td>
				<td>
					<a target="_blank">预览</a>
					<a>编辑</a>
					<a data-id="10" data-opt="del">删除</a>
				</td>
			</tr>
			<tr>
				<td><input type="checkbox"></td>
				<td>JavaScript</td>
				<td>
					<a>验证（Javascript和正则表达式）</a>
				</td>
				<td>Beginner</td>
				<td>2016-11-17 14:22</td>
				<td>23</td>
				<td>正常</td>
				<td>0</td>
				<td style="text-align:center;"><i class="layui-icon" style="color:red;">ဇ</i></td>
				<td>
					<a target="_blank">预览</a>
					<a>编辑</a>
					<a data-id="9" data-opt="del">删除</a>
				</td>
			</tr>
			<tr>
				<td><input type="checkbox"></td>
				<td>网络</td>
				<td>
					<a>win7网络连接不上默认网关不可用解决方案</a>
				</td>
				<td>Beginner</td>
				<td>2016-11-17 14:18</td>
				<td>31</td>
				<td>正常</td>
				<td>0</td>
				<td style="text-align:center;"><i class="layui-icon" style="color:red;">ဇ</i></td>
				<td>
					<a target="_blank">预览</a>
					<a>编辑</a>
					<a data-id="7" data-opt="del">删除</a>
				</td>
			</tr>
			<tr>
				<td><input type="checkbox"></td>
				<td>JavaScript</td>
				<td>
					<a>Js中的window.parent ,window.top,window.self 详解</a>
				</td>
				<td>Beginner</td>
				<td>2016-11-17 14:17</td>
				<td>23</td>
				<td>正常</td>
				<td>0</td>
				<td style="text-align:center;"><i class="layui-icon" style="color:red;">ဇ</i></td>
				<td>
					<a target="_blank">预览</a>
					<a>编辑</a>
					<a data-id="6" data-opt="del">删除</a>
				</td>
			</tr>
	      </tbody> 
	    </table>
	  </div>      
  </div>
</template>

<script>
export default {
  name: 'CenterB',
  data () {
    return {
      msg: '表格管理内容'
    }
  }
}
</script>


<style>
  .current-page{
    border-bottom:1px solid #1AA094;
  }
  .project{
    padding-left:15px;
    line-height:40px;
    text-align:left;
    background-color:#b5cfd9;
    width:120px;
    font-size:18px;
  }
  .project>i{
    color:#333;
  }
  .layui-field-box {
    padding: 10px 15px;
  }
  .site-table {
    width: 100%;
    margin: 10px 0;
    border-collapse: collapse;
    border-spacing: 0;
   }
  .site-table thead {
    background-color: #f2f2f2;
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  .site-table tbody tr td {
    text-align: center;
  } 
  .site-table th, .site-table td {
    padding: 6px 15px;
    min-height: 20px;
    line-height: 20px;
    border: 1px solid #ddd;
    font-size: 14px;
    font-weight: 400;
  }
  .layui-btn {
    display: inline-block;
    background-color: #009688;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    opacity: .9;
    outline: 0;
    box-sizing: border-box!important;
  }
  .layui-btn-mini {
    height: 22px;
    line-height: 22px;
    padding: 0 5px;
    font-size: 12px;
  }
  .layui-btn-normal {
    background-color: #1E9FFF;
   }
  .layui-btn-danger {
    background-color: #FF5722;
  }
  

</style>
