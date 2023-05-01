import './Html.css';

const Html = () => {
    return (
        <div className="html">
                <div className="head-section">
                    <p className="no-indent">&lt;!DOCTYPE html&gt;</p>
                    <p className="no-indent">&lt;html lang=&quot;en&quot;&gt;</p>
                    <p className="indent1">&lt;head&gt;</p>
                    <p className="indent2">&lt;meta charset=&quot;UTF-8&quot;&gt;</p>
                    <p className="indent2">&lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</p>
                    <p className="indent2">&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</p>
                    <p className="indent2">&lt;title&gt;Document&lt;/title&gt;</p>               
                    <p className="indent1">&lt;/head&gt;</p>
                    <p className="indent1">&lt;body&gt;</p> 
                    <p className="indent2">&lt;main&gt;</p>       
                </div>
                <div className="name-section">
                    <p className="name">&lt;h1&gt;<span className="name-text">sarah richens</span>&lt;/h1&gt;</p>
                </div>
                <div className="tag-section">
                    <p className="tag">&lt;p&gt;<span className="tag-text">software developer</span>&lt;/p&gt;</p>
                </div>             
                <div className="end-section">
                    <p className="indent2">&lt;/main&gt;</p>              
                    <p className="indent1">&lt;/body&gt;</p>
                    <p className="no-indent">&lt;/html&gt;</p>
                </div>    
            </div>
    )
};

export default Html;  