import Link from "next/link";


async function fetchUrls (){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Url`,{
        cache:'force-cache'
    })
    
    if(!response.ok){
        throw new Error('failed to fetch urls');
    }
    return response.json()
}
export default async function UrlList() {
    let urls;
    try {
        urls = await fetchUrls();
        
    } catch(error) {
        console.log(error);
        return (
            
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="p-10 bg-white rounded-lg shadow-2xl max-w-4xl w-full">
                    <h1 className="text-3xl font-bold mg-6 text-center text-gray-700">Error</h1>
                    <p className="text-center text-red-500">Failed to load urls</p>
                </div>
            </div>
        );
    }

    return (
        <>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
            
            <div className="p-10 bg-gray-700 rounded-lg shadow-2xl max-w-4xl w-full">
                <Link className="text-gray-200 w-full p-10" href={'/'}>Home</Link>
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-200">All Short Urls</h1>
                <div className="overflow-x-auto">

                    <table className="table table-zebra w-full">

                        <thead>
                            <tr>
                                <th>
                                    Oringinal URL
                                </th>
                                <th>
                                    Short URL
                                </th>
                            </tr>
                        </thead>

                        <tbody>

                            {urls.urls && urls.urls.map((url: {_id: string, originalUrl: string, shortUrl: string}) => {
                                return (
                                    <tr key={url._id}>
                                        <td className="text-center">{url.originalUrl}</td>
                                        <td className="text-center">
                                            <a
                                                href={`/${url.shortUrl}`}
                                                target="_blank"
                                                className=" text-blue-400 hover:underline"
                                            >
                                                {`${process.env.NEXT_PUBLIC_BASE_URL}/${url.shortUrl}`}
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>

                    </table>

                </div>


            </div>

        </div>
        </>
    )
}