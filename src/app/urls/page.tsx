import Link from "next/link"

async function fetchUrls() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/Url`, {
        cache: "no-cache"
    })

    if (!response.ok) {
        throw new Error("failed to fetch urls")
    }
    return response.json()
}
export default async function UrlList() {
    let urls
    try {
        urls = await fetchUrls()
    } catch (error) {
        console.log(error)
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="p-10 bg-white rounded-lg shadow-2xl max-w-4xl w-full">
                    <h1 className="text-3xl font-bold mg-6 text-center text-gray-700">
                        Error
                    </h1>
                    <p className="text-center text-red-500">Failed to load urls</p>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
                <div className="p-10 bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full ">
                    <Link className="text-gray-200 w-full p-4 rounded-lg bg-gray-950 hover:bg-gray-900 transition-colors" href={"/"}>
                        Home
                    </Link>
                    <h1 className="text-3xl font-bold mb-6 text-center text-gray-200">
                        All Short Urls
                    </h1>
                    <div className="overflow-x-auto">
                        <div className="overflow-x-auto rounded-2xl shadow-md border border-gray-200">
                            <table className="min-w-full table-auto divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 w-1/2">
                                            Original URL
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                            Short URL
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {urls.urls.map((url: {_id: string, originalUrl: string, shortUrl: string}) => (
                                        <tr key={url._id} className="hover:bg-gray-900 transition">
                                            <td className="px-6 py-4 text-md text-gray-200 break-words max-w-[400px]">
                                                {url.originalUrl}
                                            </td>
                                            <td className="px-6 py-4 text-md text-blue-600 break-words">
                                                <Link
                                                    href={`${url.shortUrl}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:underline"
                                                >
                                                    {`${process.env.NEXT_PUBLIC_BASE_URL}${url.shortUrl}`}
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
