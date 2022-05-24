import React,{useState} from "react";
import {FaFolder} from "react-icons/fa";
import {FiFilePlus} from 'react-icons/fi';
import { Modal } from "antd";
import { Input } from 'antd';

import  "./style.css";

const Home = () => {
    const [folderName,setFolderName]=useState('')
    const [isModalVisible,setIsModalVisible]=useState(false);
    const showModal = () => {
        setIsModalVisible(true);
      };
      console.log(folderName)
    const handleOk = () => {
        setIsModalVisible(false);
      };
    
    const handleCancel = () => {
    
        setIsModalVisible(false);
      };
    return (
        <div>
            <h1>home page</h1>
            <div className="iconContainer">
                <div class="upload-btn-wrapper">
                    <FiFilePlus className="icon" size={60} color='#f5ad42'/>
                    
                
                    <input type="file" name="myfile" />
                </div>
                <FaFolder 
                className="icon" 
                size={60}
                color='#f5ad42'
                onClick={showModal}/>
            </div>
            <Modal 
            title="Folder upload" 
            visible={isModalVisible} 
            onOk={handleOk} 
            onCancel={handleCancel}
            centered>
                <Input 
                placeholder="Enter the folder name"
                onChange={(event)=>setFolderName(event.target.value)}/> ;
            </Modal>
        
 
        </div>
            
    );
};

export default Home;
