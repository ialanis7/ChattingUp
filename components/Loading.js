import { Circle } from "better-react-spinkit";

function Loading() {
    return (
        <center style={ {display: "grid", placeItems: "center", height: "100vh" }}>
            <div>
                <img src="https://freepngimg.com/thumb/whatsapp/4-2-whatsapp-transparent.png"
                alt=""
                style={{ marginBottom: 10}}
                height={200}
                />
                <Circle color="#3CBC28" size={60}/>
            </div>
        </center>
    )
}

export default Loading;