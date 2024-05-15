import React, { useState } from 'react';
const Search = () => {
    const [transcript, setTranscript] = useState('');
    
    const startRecognition = () => {
      // Создаем новый экземпляр объекта распознавания речи
      const recognition = new window.webkitSpeechRecognition();
      // Устанавливаем язык распознавания
      recognition.lang = 'ru-RU';
      // Устанавливаем обработчик события onresult, который вызывается при получении результатов распознавания
      recognition.onresult = function (event) {
        // Получаем распознанный текст и обновляем состояние transcript
        const transcript = event.results[0][0].transcript;
        setTranscript(transcript);
      };
      // Устанавливаем обработчик события onerror, который вызывается при ошибке распознавания
      recognition.onerror = function (event) {
        console.error('Ошибка распознавания:', event.error);
      };
      // Запускаем процесс распознавания речи
      recognition.start();
    };
    
    // Возвращаем JSX, который содержит кнопку для запуска распознавания и отображение распознанного текста
    return (
      <div>
        <form class="flex items-center max-w-lg mx-auto">
            <label for="voice-search" class="sr-only">Search</label>
            <div className="relative w-full">
                <input id="transcription" type="text"  class="serach bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required value={transcript} />

            </div>
            <button id="startRecognitionButton" onClick={startRecognition} type="button" class=" ml-1 w-2">
                <svg class=" m-auto w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
                </svg>
            </button>
            <button  type="submit" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>Search
            </button>
        </form>
      </div>
    );
  };
  export default Search;
  
