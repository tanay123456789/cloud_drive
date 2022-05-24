import React,{useState} from "react";
import {FaFolder} from "react-icons/fa";
import {FiFilePlus} from 'react-icons/fi';
import { Modal } from "antd";
import  "./style.css";

const Home = () => {
    const [isModalVisible,setIsModalVisible]=useState(false);
    const showModal = () => {
        setIsModalVisible(true);
      };
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
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Sme contents...</p>
                <p>oSome contents...</p>
            </Modal>
        
 
        </div>
            
    );
};

export default Home;
