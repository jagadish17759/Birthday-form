import { useState } from 'react';
import bday from './db.js';

export default function App() {
    const [data, setData] = useState(bday);

    return (
        <div style={{
            textAlign: "center",
            height: "auto",
            margin: "50px auto",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            overflow: "hidden",
            maxWidth: "600px",
            backgroundColor: "#fff"
        }}>
            <h1 style={{
                padding: "20px 0",
                fontSize: "24px",
                color: "#333",
                borderBottom: "2px solid #eee"
            }}>
                {data.length} BIRTHDAYS TODAY
            </h1>
            <div style={{
                margin: "20px 0",
                padding: "0 20px"
            }}>
                {
                    data.map((x) => (
                        <div key={x.id} style={{
                            backgroundColor: "#f9f9f9",
                            fontSize: "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "10px",
                            borderRadius: "5px",
                            marginBottom: "10px",
                            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                            transition: "background-color 0.3s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#d3d3d3"; 
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#f9f9f9"; 
                        }}>
                            <img src={x.image} alt={x.name} style={{
                                height: "60px",
                                width: "90px",
                                borderRadius: "10px",
                                marginRight: "15px"
                            }} />
                            <span style={{ fontSize: "18px", color: "#555" }}>
                                {x.name}, {x.age} years old
                            </span>
                        </div>
                    ))
                }
            </div>
            <button style={{
                padding: "10px 20px",
                margin: "20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.3s"
            }} onClick={() => setData([])}>
                Clear All
            </button>
        </div>
    );
}
