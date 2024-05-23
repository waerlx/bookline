import { Typography } from 'antd';
import BubblesAnimation from '../../components/layout/BubblesAnimation'
export default function About() {
    return (
        <div className="abou">
            <div className="container">
                <div className="main_about relative flex  items-center min-h-96 mt-8"> {/* jistify-center */}

                    <div >
                        <BubblesAnimation width={1024} height={394} /> {/* Пример размеров контейнера */}
                        <div className="relative z-10 text-white">
                            <h1 className="text-6xl font-bold ml-28">Добро пожаловать <br /> на BookLine</h1>
                            <p className="mt-4 text-xl ml-28"> мы стремимся сделать для Вас <br /> шопинг удобным и доступным

                            </p>
                        </div>
                    </div>
                </div>
                <section className="main_statistic mt-12 ">
                    <div className="general flex space-between">
                        <div className="about-static_card static-cart">
                            <div className="abot-stat-info">
                                <b className='text-3xl'>100 тыс+</b>
                                <span className='block text-lg text-gray-400'>заказов в день</span>
                            </div>

                        </div>
                        <div className="about-static_card static-built flex space-between">
                            <div className="abot-stat-info">
                                <b className='text-3xl'>100 тыс+</b>
                                <span className='block text-lg text-gray-400'>заказов в день</span>
                            </div>

                        </div>
                        <div className="about-static_card static-box flex space-between">
                            <div className="abot-stat-info">
                                <b className='text-3xl'>100 тыс+</b>
                                <span className='block text-lg text-gray-400'>заказов в день</span>
                            </div>

                        </div>
                    </div>
                </section>




                <section className="about_plus">
                    <h2 className='sec_tit text-purple-400 text-5xl mt-7 text-center'><b>Покупайте на BookLine</b></h2>
                    <div className="general flex space-between flex-nowrap">
                        <div className="  ">
                            <div className="bg-white about_plus-card about_deliver plus_img border rounded-2xl mt-3 ">
                                <p className='text-center text-lg mt-2'><b>Быстрая доставка</b></p>
                            </div>

                            <div className="plus_info text-center mt-5">
                                <p className="plus_stat "><b className='text-center text-2xl'>Более 80%</b></p>
                                <span className='text-gray-500 text-sm'>доставляется на <br />
                                    следующий день</span>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="bg-white about_plus-card about_deliver plus_img border rounded-2xl mt-3 about_bag">
                                <p className='text-center text-lg mt-2'><b>Скидки и акции</b></p>
                            </div>

                            <div className="plus_info text-center mt-5">
                                <p className="plus_stat "><b className='text-center text-2xl'>до 90%</b></p>
                                <span className='text-gray-500 text-sm'>скидка постоянным <br />
                                    покупателям
                                </span>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="bg-white about_plus-card about_gps plus_img border rounded-2xl mt-3">
                                <p className='text-center text-lg mt-2'><b>Удобный самовывоз</b></p>
                            </div>

                            <div className="plus_info text-center mt-5">
                                <p className="plus_stat "><b className='text-center text-2xl'>100 +</b></p>
                                <span className='text-gray-500 text-sm'>пунктов выдачи заказа</span>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="bg-white about_plus-card about_bag plus_img border rounded-2xl mt-3">
                                <p className='text-center text-lg mt-2'><b>Широкий ассортимент</b></p>
                            </div>

                            <div className="plus_info text-center mt-5">
                                <p className="plus_stat "><b className='text-center text-2xl'>10 тыс+</b></p>
                                <span className='text-gray-500 text-sm'>ежедневно отправляемых <br />
                                    товаров со складов</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="awards">
                    <h2 className='sec_tit text-purple-400 text-5xl mt-7 text-center'><b>Награды</b></h2>
                    <div className="general flex space-between flex-wrap">
                        <div className="awards_card ">
                            <div className="award_img"></div>
                            <div className="award_info">
                                <h3 className='award_tit text-base text-center'><b>1-е место в рейтинге</b></h3>
                                <p className="award_txt text-sm text-center text-gray-400">ТОП-100 крупнейших <br />
                                    интернет-магазинов России</p>
                            </div>

                        </div>
                        <div className="awards_card">
                            <div className="award_img"></div>
                            <div className="award_info">
                                <h3 className='award_tit text-base text-center'><b>1-е место в рейтинге</b></h3>
                                <p className="award_txt text-sm text-center text-gray-400 items-center">ТОП-100 крупнейших <br />
                                    интернет-магазинов России</p>
                            </div>

                        </div>
                        <div className="awards_card ">
                            <div className="award_img"></div>
                            <div className="award_info">
                                <h3 className='award_tit text-base text-center'><b>1-е место в рейтинге</b></h3>
                                <p className="award_txt text-sm text-center text-gray-400">ТОП-100 крупнейших <br />
                                    интернет-магазинов России</p>
                            </div>

                        </div>
                        <div className="awards_card ">
                            <div className="award_img"></div>
                            <div className="award_info">
                                <h3 className='award_tit text-base text-center'><b>1-е место в рейтинге</b></h3>
                                <p className="award_txt text-sm text-center text-gray-400">ТОП-100 крупнейших <br />
                                    интернет-магазинов России</p>
                            </div>

                        </div>
                        <div className="awards_card ">
                            <div className="award_img"></div>
                            <div className="award_info">
                                <h3 className='award_tit text-base text-center'><b>1-е место в рейтинге</b></h3>
                                <p className="award_txt text-sm text-center text-gray-400">ТОП-100 крупнейших <br />
                                    интернет-магазинов России</p>
                            </div>

                        </div>
                        <div className="awards_card ">
                            <div className="award_img"></div>
                            <div className="award_info">
                                <h3 className='award_tit text-base text-center'><b>1-е место в рейтинге</b></h3>
                                <p className="award_txt text-sm text-center text-gray-400">ТОП-100 крупнейших <br />
                                    интернет-магазинов России</p>
                            </div>

                        </div>
                        <div className="awards_card ">
                            <div className="award_img"></div>
                            <div className="award_info">
                                <h3 className='award_tit text-base text-center'><b>1-е место в рейтинге</b></h3>
                                <p className="award_txt text-sm text-center text-gray-400">ТОП-100 крупнейших <br />
                                    интернет-магазинов России</p>
                            </div>

                        </div>
                        <div className="awards_card ">
                            <div className="award_img"></div>
                            <div className="award_info">
                                <h3 className='award_tit text-base text-center'><b>1-е место в рейтинге</b></h3>
                                <p className="award_txt text-sm text-center text-gray-400">ТОП-100 крупнейших <br />
                                    интернет-магазинов России</p>
                            </div>

                        </div>
                        <div className="awards_card ">
                            <div className="award_img"></div>
                            <div className="award_info">
                                <h3 className='award_tit text-base text-center'><b>1-е место в рейтинге</b></h3>
                                <p className="award_txt text-sm text-center text-gray-400">ТОП-100 крупнейших <br />
                                    интернет-магазинов России</p>
                            </div>

                        </div>
                    </div>
                </section>





            </div>

        </div>
    );
}