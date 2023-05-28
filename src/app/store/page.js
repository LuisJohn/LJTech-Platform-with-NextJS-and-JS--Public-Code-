import getAllProducts from "@/api/StoreApi";

const page = async () => {

    const products = await getAllProducts();

    return (
        <>
            <div className='min-h-screen ml-24 mt-10 p-10'>
                <h1 className="text-3xl font-bold">LJ Tech Shop🛍️</h1>

                {/* PRODUCTS ARE RENDERED HERE */}
                <div className="grid grid-cols-4 mt-10">
                    {products.map((product) => {
                        const description = product.description;
                        return (
                            <div>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img src={`${product.image}`} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{product.title}</h2>
                                        <p>{description.substring(0,100)}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>



        </>

    )
}

export default page