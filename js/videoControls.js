const video = document.getElementById('myVideo');
        const subtitles = document.getElementById('subtitles');
        const timeIndicator = document.getElementById('time-indicator');
        const playPauseButton = document.getElementById('playPauseButton');
        const maxDuration = 85; // Duración máxima en segundos

        // Función para alternar entre play y pausa
        function togglePlayPause() {
            if (video.paused) {
                video.play();
                playPauseButton.textContent = 'Pause';
            } else {
                video.pause();
                playPauseButton.textContent = 'Play';
            }
        }

        // Escuchar clics en el video y en el botón para alternar play/pausa
        video.addEventListener('click', togglePlayPause);
        playPauseButton.addEventListener('click', togglePlayPause);

        // Función para mostrar subtítulos
        function showSubtitles(text) {
            subtitles.textContent = text;
        }

        // Reproducir el video automáticamente al cargar la página
        video.autoplay = true;

        // Actualizar subtítulos y el indicador de tiempo
        video.addEventListener('timeupdate', function() {
            const currentTime = Math.floor(video.currentTime);
            timeIndicator.textContent = `${currentTime}s`;

            if (currentTime >= maxDuration) {
              video.pause();
              video.currentTime = 0; // Reiniciar el video si lo deseas
              playPauseButton.textContent = 'Reproducir';
            }

            switch (currentTime) {
                case 0:
                    showSubtitles('Esta es la pagina principal de este proyecto');
                    break;
                case 5:
                    showSubtitles('Aqui se muestran los packs que tenemos reservados');
                    break;
                case 10:
                    showSubtitles('Y aqui la accion de seleccionar a una persona para entregarselo');
                    break;
                case 20:
                    showSubtitles('Se puede seleccionar el pack que queremos entregar');
                    break;
                case 25:
                    showSubtitles('Y aparecera un mensaje de confirmacion de la entrega');
                    break;
                case 30:
                    showSubtitles('Ahora veremos la forma de reservar el pack');
                    break;
                case 65:
                    showSubtitles('Esta es otra pagina del proyecto');
                    break;
                case 70:
                    showSubtitles('Donde se pueden ver a las personas que mas le hemos entregado');
                    break;
                case 75:
                    showSubtitles('Y por ultimo se puede ver el perfil del usuario');
                    break;
                default:
                    break;
            }
        });

        // Actualizar el estado del botón al cargar la página
        window.addEventListener('load', () => {
            playPauseButton.textContent = video.paused ? 'Play' : 'Pause';
        });