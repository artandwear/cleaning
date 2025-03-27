import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import { FaCheckCircle } from 'react-icons/fa';

const About: React.FC = () => {
    useEffect(() => {
        const chartDom = document.getElementById('satisfactionChart');
        if (chartDom) {
            const myChart = echarts.init(chartDom);
            const option = {
                animation: false,
                title: {
                    text: 'Customer Satisfaction',
                    left: 'center',
                },
                tooltip: {
                    trigger: 'item',
                },
                series: [
                    {
                        name: 'Satisfaction',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2,
                        },
                        label: {
                            show: false,
                            position: 'center',
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 20,
                                fontWeight: 'bold',
                            },
                        },
                        labelLine: {
                            show: false,
                        },
                        data: [
                            { value: 95, name: 'Very Satisfied' },
                            { value: 4, name: 'Satisfied' },
                            { value: 1, name: 'Neutral' },
                        ],
                    },
                ],
            };
            myChart.setOption(option);
        }
    }, []);

    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                        <div className="rounded-lg overflow-hidden">
                            <img
                                src="/images/whyus-bg.jpg"
                                alt="About Us"
                                className="w-full"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 text-gray-800">
                        <h2 className="text-4xl font-semibold mb-6">Why Choose Us?</h2>
                        <div className="mb-8">
                            <div className="flex items-center mb-4">
                                <FaCheckCircle className="text-blue-600 text-xl mr-3" />
                                <span className="text-lg">Experienced & Professional Staff</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaCheckCircle className="text-blue-600 text-xl mr-3" />
                                <span className="text-lg">Eco-friendly Cleaning Products</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaCheckCircle className="text-blue-600 text-xl mr-3" />
                                <span className="text-lg">100% Satisfaction Guarantee</span>
                            </div>
                            <div className="flex items-center">
                                <FaCheckCircle className="text-blue-600 text-xl mr-3" />
                                <span className="text-lg">Flexible Scheduling Options</span>
                            </div>
                        </div>
                        <div id="satisfactionChart" style={{ width: '100%', height: '300px' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
