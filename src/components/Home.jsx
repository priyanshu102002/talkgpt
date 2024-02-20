import React, { useState } from "react";
import run from "../utils/generateText";
import ReactMarkdown from "react-markdown";

const Home = () => {
    const [formData, setFormData] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();

        setLoading(true);
        const ans = run({ prompt: formData });
        ans.then((res) => {
            setResponse(res);
            setLoading(false);
        })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
            .finally(() => {
                setFormData("");
            });
    };

    return (
        <section className="text-gray-400 bg-gray-900 body-font p-4 h-full text-xl ">
            <div className="w-full sm:w-2/3 mx-auto h-[calc(100vh-90px)] flex flex-col justify-between px-6 py-4 rounded-lg gap-10 bg-gray-800 ">
                {loading ? (
                    <p>Generating.....</p>
                ) : (
                    <ReactMarkdown className='scrollable-container overflow-auto flex flex-col gap-4'>{response}</ReactMarkdown>
                )}
                <form onSubmit={submitHandler} className="flex gap-4 ">
                    <input
                        type="text"
                        className="w-full rounded-lg bg-gray-900 border-2 border-gray-500 p-3"
                        placeholder="Enter a prompt"
                        value={formData} // Set input value to formData
                        onChange={(e) => setFormData(e.target.value)}
                    />
                    <button
                        disabled={loading}
                        className="bg-blue-600 hover:bg-blue-800 px-8 rounded-lg text-white disabled:bg-blue-900"
                    >
                        {loading ? "Generating..." : "Generate"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Home;
