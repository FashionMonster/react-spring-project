import React, {useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Hello = () => {
    // 初期データ
    const [resResult, setResResult] = useState({
        title: "初期表示",
        message: "初期表示メッセージ"
    });

    const execRequest = () => {
        // バックエンドへのリクエスト
        axios.get("api/hello/getHello")
            .then(res => {
                setResResult(
                    (prevState) =>
                        res.data)
            })
            .catch(e => alert(e));
    }

    return (
        <>
            <h1>Hello TS-React!</h1>
            <button onClick={() => execRequest()}>バックエンドへのリクエスト確認</button>
            <div className={"resResultArea"}>
                <p>{resResult.title}</p>
                <p>{resResult.message}</p>
            </div>
            <Link to={"/app/pageSample"}>リンク</Link>
        </>
    )
}

export default Hello;
