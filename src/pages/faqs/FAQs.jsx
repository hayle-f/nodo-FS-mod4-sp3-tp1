const Faqs = () => {
    return (
    <>
        <section className="faq-section flex flex-col items-center justify-center pt-6 px-4 pb-4 my-8 mx-auto max-w-[90%] shadow-custom-section rounded-2xl xl:p-[30px] xl:max-w-[80%]">
            <h1 className="mb-8 text-[3rem] font-bold xsm:text-[2.5rem]">Preguntas Frecuentes</h1>

            <div id="faqs" className="xl:grid grid-cols-2 gap-y-3 gap-x-[8%] mb-3">

                <div>
                {/* FAQ 1 */}
                    <div className="faq-item">
                    <input type="checkbox" id="faq1" className="w-0 opacity-0" />
                    <label htmlFor="faq1" className="faq-question flex justify-between items-center text-[#333] text-base font-semibold p-[10px] gap-4 text-left w-full border-none cursor-pointer rounded-lg hover:shadow-custom-question xl:text-[1.3rem]">
                        ¿Qué tipo de auriculares debo elegir: in-ear, on-ear o over-ear?
                        <span className="arrow w-0 h-0 border-l-4 border-r-4 border-transparent border-t-8 border-t-[#333] transition-transform duration-300 ease-in-out"></span>
                    </label>
                    <div className="faq-answer hidden p-3 bg-[#3333330a] mt-1 rounded-lg">
                        <p className="answer text-[0.9rem] leading-5 xl:text-[1.1rem]">
                        Depende de tus preferencias personales y del uso que les des. Los auriculares in-ear son compactos y portátiles, ideales para hacer ejercicio o viajar. Los on-ear son ligeros y cómodos para el uso diario, mientras que los over-ear proporcionan mayor comodidad y calidad de sonido, siendo perfectos para largas sesiones de escucha o para quienes buscan una experiencia más inmersiva.
                        </p>
                    </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className="faq-item">
                    <input type="checkbox" id="faq2" className="w-0 opacity-0" />
                    <label htmlFor="faq2" className="faq-question flex justify-between items-center text-[#333] text-base font-semibold p-[10px] gap-4 text-left w-full border-none cursor-pointer rounded-lg hover:shadow-custom-question xl:text-[1.3rem]">
                        ¿Puedo usar los auriculares en la lluvia o durante actividades al aire libre?
                        <span className="arrow w-0 h-0 border-l-4 border-r-4 border-transparent border-t-8 border-t-[#333] transition-transform duration-300 ease-in-out"></span>
                    </label>
                    <div className="faq-answer hidden p-3 bg-[#3333330a] mt-1 rounded-lg">
                        <p className="answer text-[0.9rem] leading-5 xl:text-[1.1rem]">
                        Algunos modelos de auriculares están diseñados para resistir la humedad y el sudor, gracias a su certificación IPX (resistencia al agua). Sin embargo, te recomendamos revisar las especificaciones de cada modelo para asegurarte de que sean adecuados para su uso en condiciones de humedad o lluvia ligera.
                        </p>
                    </div>
                    </div>

                    {/* FAQ 3 */}
                    <div className="faq-item">
                    <input type="checkbox" id="faq3" className="w-0 opacity-0" />
                    <label htmlFor="faq3" className="faq-question flex justify-between items-center text-[#333] text-base font-semibold p-[10px] gap-4 text-left w-full border-none cursor-pointer rounded-lg hover:shadow-custom-question xl:text-[1.3rem]">
                        ¿Cuánto duran los auriculares inalámbricos con una carga completa?
                        <span className="arrow w-0 h-0 border-l-4 border-r-4 border-transparent border-t-8 border-t-[#333] transition-transform duration-300 ease-in-out"></span>
                    </label>
                    <div className="faq-answer hidden p-3 bg-[#3333330a] mt-1 rounded-lg">
                        <p className="answer text-[0.9rem] leading-5 xl:text-[1.1rem]">
                        La duración de la batería depende del modelo, pero en general, los auriculares inalámbricos pueden ofrecer entre 6 y 30 horas de uso continuo con una carga completa.
                        </p>
                    </div>
                    </div>
                </div>

                <div>
                    {/* FAQ 4 */}
                    <div className="faq-item">
                    <input type="checkbox" id="faq4" className="w-0 opacity-0" />
                    <label htmlFor="faq4" className="faq-question flex justify-between items-center text-[#333] text-base font-semibold p-[10px] gap-4 text-left w-full border-none cursor-pointer rounded-lg hover:shadow-custom-question xl:text-[1.3rem]">
                        ¿Son compatibles los auriculares con todos los dispositivos?
                        <span className="arrow w-0 h-0 border-l-4 border-r-4 border-transparent border-t-8 border-t-[#333] transition-transform duration-300 ease-in-out"></span>
                    </label>
                    <div className="faq-answer hidden p-3 bg-[#3333330a] mt-1 rounded-lg">
                        <p className="answer text-[0.9rem] leading-5 xl:text-[1.1rem]">
                        Nuestros auriculares son compatibles con una amplia gama de dispositivos, como smartphones, tabletas, computadoras, consolas de videojuegos y más. La mayoría de los modelos se conectan vía Bluetooth o cable, por lo que deberían funcionar con la mayoría de dispositivos con puertos estándar.
                        </p>
                    </div>
                    </div>

                    {/* FAQ 5 */}
                    <div className="faq-item">
                    <input type="checkbox" id="faq5" className="w-0 opacity-0" />
                    <label htmlFor="faq5" className="faq-question flex justify-between items-center text-[#333] text-base font-semibold p-[10px] gap-4 text-left w-full border-none cursor-pointer rounded-lg hover:shadow-custom-question xl:text-[1.3rem]">
                        ¿Qué diferencias hay entre los auriculares Bluetooth y los de cable?
                        <span className="arrow w-0 h-0 border-l-4 border-r-4 border-transparent border-t-8 border-t-[#333] transition-transform duration-300 ease-in-out"></span>
                    </label>
                    <div className="faq-answer hidden p-3 bg-[#3333330a] mt-1 rounded-lg">
                        <p className="answer text-[0.9rem] leading-5 xl:text-[1.1rem]">
                        Los auriculares Bluetooth ofrecen una mayor comodidad y libertad de movimiento al no tener cables. Son ideales para hacer ejercicio o para el uso diario sin enredos. Los auriculares de cable suelen ofrecer una conexión más estable y una mejor calidad de sonido sin la necesidad de cargar baterías.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contacto" className="flex flex-col items-center justify-center pt-6 px-4 pb-4 my-8 mx-auto max-w-[90%] shadow-custom-section rounded-2xl xl:p-[30px] xl:max-w-[80%]">
            <h1 className="mb-8 text-[2.4rem] font-bold sm:text-[3rem]">Contactanos</h1>
            <p className="text-[#333] text-[1.1rem] font-normal my-[45px] mx-auto py-0 px-5 sm:mt-5 xl:text-[1.4rem] xl:font-medium">
            Nos encantaría poder ayudarte con cualquier inquietud que tengas. <br />
            Si necesitas más detalles sobre nuestros productos, servicios o cualquier otra consulta, por favor completa el formulario a continuación. <br />
            Nuestro equipo se pondrá en contacto contigo lo antes posible para brindarte la información que necesitas.
            </p>

            <form action="#" method="POST" className="bg-[#fdfdfd] p-5 rounded-2xl mx-auto my-4 shadow-custom-section sm:p-6 max-w-[90%] sm:max-w-[600px] sm:shadow-custom-form">
            <fieldset className="rounded-xl pt-2 pb-4 px-4 mb-4 border border-[#33333331] xsm:p-[8px]">
                <legend className="text-left text-[#222222] py-0 px-2">Nombre:</legend>
                <input type="text" id="nombre" name="nombre" required className="w-full py-1 px-5 text-base font-medium text-[#333] rounded-lg focus:border-[#0000004f] focus:outline outline-2 outline-[#4e4d4d13] focus:rounded-lg xsm:p-[2px] xsm:max-w-[95%] xsm:text-center xsm:focus:my-0 xsm:focus:mx-[8px] xsm:focus:outline-[1px]" />
            </fieldset>

            <fieldset className="rounded-xl pt-2 pb-4 px-4 mb-4 border border-[#33333331] xsm:p-[8px]">
                <legend className="text-left text-[#222222] py-0 px-2">Apellido</legend>
                <input type="text" id="apellido" name="apellido" required className="w-full py-1 px-5 text-base font-medium text-[#333] rounded-lg focus:border-[#0000004f] focus:outline outline-2 outline-[#4e4d4d13] focus:rounded-lg xsm:p-[2px] xsm:max-w-[95%] xsm:text-center xsm:focus:my-0 xsm:focus:mx-[8px] xsm:focus:outline-[1px]" />
            </fieldset>

            <fieldset className="rounded-xl pt-2 pb-4 px-4 mb-4 border border-[#33333331] xsm:p-[8px]">
                <legend className="text-left text-[#222222] py-0 px-2">E-mail</legend>
                <input type="email" id="email" name="email" required className="w-full py-1 px-5 text-base font-medium text-[#333] rounded-lg focus:border-[#0000004f] focus:outline outline-2 outline-[#4e4d4d13] focus:rounded-lg xsm:p-[2px] xsm:max-w-[95%] xsm:text-center xsm:focus:my-0 xsm:focus:mx-[8px] xsm:focus:outline-[1px]" />
            </fieldset>

            <fieldset className="rounded-xl pt-2 pb-4 px-4 mb-4 border border-[#33333331] xsm:p-[8px]">
                <legend className="text-left text-[#222222] py-0 px-2">Consulta</legend>
                <textarea id="consulta" name="consulta" rows="4" cols="50" required className="w-full py-1 px-5 text-base font-medium text-[#333] resize-y min-h-[90px] max-h-[450px] rounded-lg focus:border-[#0000004f] focus:outline outline-2 outline-[#4e4d4d13] focus:rounded-lg xsm:p-[2px] xsm:max-w-[95%] xsm:text-center xsm:focus:my-0 xsm:focus:mx-[8px] xsm:focus:outline-[1px]"></textarea>
            </fieldset>

            <button type="submit" className="text-[#000000ab] font-raleway text-[0.9rem] tracking-wide font-medium bg-[#fdfdfd] p-1 border border-[#0000004f] rounded-md transition-all ease-linear duration-200 hover:text-[1rem] hover:shadow-custom-section">
                Enviar
            </button>
            </form>
        </section>
    </>
    );
};

export default Faqs;
