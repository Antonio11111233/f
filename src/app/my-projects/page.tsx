import React from "react";
import Particle from "../components/Particle";
import Navbar from "../components/Navbar";
import '../globals.css';

const Page = () => {
    return (
        <div className="flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-[#0c011A]">
            <div className="flex flex-col gap-3">
            <h1 className="text-[40px] text-white font-semibold info_1">
            Отслеживание<span className="text-red-500">.</span>
            </h1>
            <p className="max-w-[380px] text-[16px] text-gray-200 md:text-gray-400 info_2">
            Пользователи могут легко отслеживать прогресс выполнения задач, оценивать
            время, затраченное на каждую задачу, и анализировать эффективность своей работы.
            </p>
        </div>
        <div className="flex flex-col gap-3">
            <h1 className="text-[40px] text-white font-semibold info_1">
            Продуктивность <span className="text-red-500">.</span>
            </h1>
            <p className="max-w-[380px] text-[16px] text-gray-200 md:text-gray-400 info_2">
            Благодаря удобной визуализации и эффективному распределению задач, Kanban помогает
            повысить продуктивность команды и достичь поставленных целей быстрее.
            </p>
        </div>
        <div className="flex flex-col gap-3">
            <h1 className="text-[40px] text-white font-semibold info_1">
            Управление<span className="text-red-500">.</span>
            </h1>
            <p className="max-w-[380px] text-[16px] text-gray-200 md:text-gray-400 info_2">
            Kanban позволяет эффективно управлять рабочим процессом,
            оптимизировать рабочий поток и улучшать коммуникацию между участниками команды.
            </p>
        </div>
        <Navbar />
        <div className="absolute right-0 top-0 h-full w-[100%] z-[2]">
        
        <Particle/>
      </div>
        </div>
    );
};

export default Page;