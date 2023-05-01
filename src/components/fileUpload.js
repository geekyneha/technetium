import React,{useRef} from 'react';
function FileUpload(){
    const inputRef=useRef();
    console.log(inputRef);

    function handleInput(){
        console.log(inputRef.current.click())

    }
    return (
        <div>
            <h1>
                Upload your file 
            </h1>
            <input type="file" ref={inputRef}/>
            <button onClick={handleInput}>Pick the file</button>
        </div>
    )
}
export default FileUpload;