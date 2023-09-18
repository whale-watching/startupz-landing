function Ready () {
    return (
        <div className='py-[20px] bg-[#FFC351]'>
            <div className='container mx-auto px-4 flex flex-col'>
                <h3 className='text-white text-[60px] font-bold text-center md:text-left'>Are you ready to board this rocket ship?</h3>
                <p className='text-white mb-[16px] text-center md:text-left'>Share your excitement with us.</p>
                <form className='w-full sm:w-[320px] md:w-[400px] px-[20px] pt-[60px] pb-[40px] bg-[#F3F3F3] rounded-[20px] form-shadow flex flex-col items-center'>
                    <input type="text" placeholder="Name*" id="name" name="name" className="w-full px-4 py-2 rounded-md mb-4 form-shadow" />
                    <input type="email" placeholder="Email*" id="email" name="email" className="w-full px-4 py-2 rounded-md mb-4 form-shadow" />
                    <textarea id="message" name="message" placeholder="Message*" rows="10" className="w-full px-4 py-2 rounded-md mb-4 form-shadow" />
                    <button type="submit" className='w-fit px-[30px] py-[8px] rounded-[20px] bg-[#3D4F5C] text-white'>Shoot us a message</button>
                </form>
            </div>
        </div>
    )
}

export default Ready;
