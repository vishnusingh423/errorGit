import React from "react";

import 'antd/dist/antd.css';
import './App1.css';
import { Layout, Menu, Breadcrumb ,Tabs, Radio,Input, Select, Space, Cascader, Button ,Table} from 'antd';
import {
    MenuOutlined,GithubOutlined,BellOutlined,HomeOutlined, UserOutlined, AppleOutlined, AndroidOutlined,SettingOutlined
  } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="http://" className="select-before">
    <Option value="http://">Filters</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" className="select-after">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Category 1',
          value: 'Category 1',
          children: [
            {
              text: 'Yellow',
              value: 'Yellow',
            },
            {
              text: 'Pink',
              value: 'Pink',
            },
          ],
        },
        {
          text: 'Category 2',
          value: 'Category 2',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: '30%',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Find',
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Time',
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Algo',
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Ds',
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'FindMethods',
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Git',
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age,
      },
    {
      title: 'Address',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: '40%',
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brownbbbbbbbbbbbbbbbbb',
     
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];
  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
const WholeBody=()=>{
    return(
        <div>

<Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
     
          <div style={{display:'flex' ,justifyContent:'space-between'}}> 
          <div style={{color:'white' ,fontSize:18}}> <MenuOutlined /></div>
          <div  style={{color:'white',fontSize:22}}>   <GithubOutlined /></div>
          <div  style={{color:'white',fontSize:19}}>    <BellOutlined /></div>

         
    
  
              </div>
     
     
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', height:94,marginTop:82 }}>
        <div style={{display:'flex' ,justifyContent:'space-between' }}>
            <div>
            <Breadcrumb style={{fontSize:17 ,fontFamily:'bold'}}>
    <Breadcrumb.Item href="">
      <HomeOutlined />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <UserOutlined />
      <span style={{color:'blue'}}>facebook</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item style={{color:'blue'}}>create-react-app</Breadcrumb.Item>
  </Breadcrumb>
            </div>
            <div>
                <span>no</span>
                <span>no</span>
                </div>

        </div>
      
      <div style={{display:'flex',justifyContent:'flex-start',marginTop:23}}>
          
      <Tabs defaultActiveKey="2">
    <TabPane
      tab={
        <span>
          <AppleOutlined />
         Code
        </span>
      }
      key="1"
    >
    Issues
    </TabPane>
    <TabPane
      tab={
        <span>
          <AndroidOutlined />
         
Issues

        </span>
      }
      key="2"
    >
     <div style={{display:'flex' }}>
          <div > <Space direction="vertical" >
    <Input   addonBefore={selectBefore} defaultValue="mysite" />
   
  </Space></div>
          <div style={{marginLeft:980}}><Button style={{backgroundColor:'green' ,color:'white'}}>New Issues</Button></div>
         
          </div>
<div style={{display:'flex',justifyContent:'start'}}>495 Open</div>
<div style={{display:'flex',justifyContent:'start' ,width:222}}>
    <Table columns={columns}  onChange={onChange} bordered  size={"large"}  dataSource={data}/>
    
    </div>

    </TabPane>
  </Tabs>
      </div>
   
    </Content>
    
  </Layout>
        </div>
    )
}

export default WholeBody;