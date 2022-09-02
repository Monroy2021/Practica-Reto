Para ejecutar el proyecto se necesitasn las siguientes dependencias:  

npm init -y
npm install --save express
npm install dotenv --save
npm install --save body-parser
npm install --save cors
npm install ejs  

Ejecutable del programa
npm start

La carpeta database se encuentra el backup d ela base de datos que se llama:
Juegopreguntasbackup.sql.  

Las insert de la base de datos fueron las siguientes:

INSERT INTO public.categoria(numero_categoria, nombre_categoria) VALUES 
(1, 'DEPORTES'),
(2, 'MATEMATICAS'),
(3, 'ENTRETENIMIENTO'),
(4, 'HISTORIA'),
(5, 'GEOGRAFIA');

INSERT INTO public.pregunta(descripcion_pregunta, id_categoria) VALUES 
('¿Cuánto dura un partido de futbol?', 1),
('¿Cómo se llama la zona de hierba donde está ubicado el hoy en golf?', 1),
('¿Dónde se inventó el tenis de mesa?', 1),
('¿En qué país se inventó el voleibol?', 1),
('¿Cuántos cuadros tiene un tablero de ajedrez?', 1);

INSERT INTO public.opcion(id_pregunta, descripcion_opcion, valor_opcion, respuesta_opcion) VALUES 
(1, '90 Minutos', 20, true),
(1, '45 Minutos', 0, false),
(1, '75 Minutos', 0, false),
(1, '100 Minutos', 0, false),
(2, 'Esplanada', 0, false),
(2, 'Campo', 0, false),
(2, 'Green', 20, true),
(2, 'Terreo', 0, false),
(3, 'Corea del Sur', 0, false),
(3, 'Inglaterra', 20, true),
(3, 'China', 0, false),
(3, 'Japón', 0, false),
(4, 'Francia', 0, false),
(4, 'Rusia', 0, false),
(4, 'Inglaterra', 0, false),
(4, 'EEUU', 20, true),
(5, '64', 20, true),
(5, '54', 0, false),
(5, '63', 0, false),
(5, '36', 0, false);

INSERT INTO public.pregunta(descripcion_pregunta, id_categoria) VALUES 
('¿Cuál es la formula del área de un circulo?', 2),
('¿Famoso de una manzana que cayó en su cabeza?', 2),
('¿Calcula a estos cuatro nueves (9×9+9)/9?', 2),
('Si 11 obreros labran un campo rectangular de 220 m de largo y 48 de ancho en 6 días. ¿Cuántos obreros serán necesarios para labrar otro campo análogo de 300 m de largo por 56 m de ancho en cinco días?', 2),
('¿El principal fundamento del origen de la teoria de grafos?', 2);


INSERT INTO public.opcion(id_pregunta, descripcion_opcion, valor_opcion, respuesta_opcion) VALUES 
(6, '½bh', 0, false),
(6, '2bh', 0, false),
(6, 'πr²', 20, true),
(6, '½ab(senΘ)', 0, false),
(7, 'Leibniz', 0, false),
(7, 'Hopital', 0, false),
(7, 'Newton', 20, true),
(7, 'Einstein', 0, false),
(8, '9', 0, false),
(8, '10', 20, true),
(8, '6', 0, false),
(8, '3', 0, false),
(9, '19', 0, false),
(9, '20', 0, false),
(9, '21', 20, true),
(9, '22', 0, false),
(10, 'Conectando algunos meridianos importantes', 0, false),
(10, 'En el estudio de los numeros primos', 0, false),
(10, 'Estudiando aquellas curvas que parecen rectas', 0, false),
(10, 'Solucionando un problema que tenia siete puentes', 20, true);


INSERT INTO public.pregunta(descripcion_pregunta, id_categoria) VALUES 
('¿Qué día es San Valentín?', 3),
('¿A quién se considera el Rey del Pop?', 3),
('¿Cómo se llama el pájaro símbolo de los Juegos del Hambre?', 3),
('¿Cuántos colores tiene un cubo de Rubik clásico?', 3),
('¿Qué integrante de la banda de Beatle fue asesinado por un fan?', 3);

INSERT INTO public.opcion(id_pregunta, descripcion_opcion, valor_opcion, respuesta_opcion) VALUES 
(11, '14 de Septiembre', 0, false),
(11, '14 de Marzo', 0, false),
(11, '14 de Febrero', 20, true),
(11, '14 de Noviembre', 0, false),
(12, 'Michael Jackson', 20, true),
(12, 'Zac Efron', 0, false),
(12, 'Justin Bieber', 0, false),
(12, 'Zayn Malik', 0, false),
(13, 'Toche', 0, false),
(13, 'Sinsajo', 20, true),
(13, 'Ruiseñor', 0, false),
(13, 'Gorrión', 0, false),
(14, '3', 0, false),
(14, '4', 0, false),
(14, '5', 0, false),
(14, '6', 20, true),
(15, 'George Harrison', 0, false),
(15, 'Ringo Starr', 0, false),
(15, 'John Lennon', 20, true),
(15, 'Tommy Moore', 0, false);


INSERT INTO public.pregunta(descripcion_pregunta, id_categoria) VALUES 
('¿De qué árbol eran las hojas que llevaban en la cabeza los antiguos romanos para simbolizar la victoria?', 4),
('¿Cuántos mandamientos hay en el cristianismo?', 4),
('¿En qué año viajó el primer hombre a la luna?', 4),
('¿Dónde surgió la filosofía?', 4),
('¿En qué año se abrió el canal de Panamá?', 4); 

INSERT INTO public.opcion(id_pregunta, descripcion_opcion, valor_opcion, respuesta_opcion) VALUES 
(16, 'Pino', 0, false),
(16, 'Olivo', 0, false),
(16, 'Laurel', 20, true),
(16, 'Naranjo', 0, false),
(17, '9', 0, false),
(17, '10', 20, true),
(17, '11', 0, false),
(17, '12', 0, false),
(18, '1968', 0, false),
(18, '1969', 20, true),
(18, '1970', 0, false),
(18, '1971', 0, false),
(19, 'España', 0, false),
(19, 'Italia', 0, false),
(19, 'Grecia', 20, true),
(19, 'Marruecos', 0, false),
(20, '1890', 0, false),
(20, '1910', 0, false),
(20, '1914', 20, true),
(20, '1920', 0, false);


INSERT INTO public.pregunta(descripcion_pregunta, id_categoria) VALUES 
('¿Dónde hay mayor número de habitantes?', 5),
('¿En qué país europeo está la ciudad de Lyon?', 5),
('¿Cuál es el único país latinoamericano que tiene 2 lenguas oficiales?', 5),
('¿Con qué otro nombre se conoce al mar de las Antillas?', 5),
('¿Qué colores tiene la bandera de Irak?', 5);

INSERT INTO public.opcion(id_pregunta, descripcion_opcion, valor_opcion, respuesta_opcion) VALUES 
(21, 'EEUU', 0, false),
(21, 'China', 20, true),
(21, 'Rusia', 0, false),
(21, 'Oceanía', 0, false),
(22, 'Francia', 20, true),
(22, 'Luxemburgo', 0, false),
(22, 'Mónaco', 0, false),
(22, 'Belgica', 0, false),
(23, 'Colombia', 0, false),
(23, 'Brasil', 0, false),
(23, 'Paraguay', 20, true),
(23, 'Argentina', 0, false),
(24, 'Golfo de México', 0, false),
(24, 'Mar de Crotés', 0, false),
(24, 'Mar Caribe', 20, true),
(24, 'Mar de Chukotka', 0, false),
(25, 'Rojo, Blanco, Azul Y Negro', 0, false),
(25, 'Rojo, Blanco, Verde Y Negro', 20, true),
(25, 'Rojo, Blanco, Amarillo Y Negro', 0, false),
(25, 'Rojo, Blanco, Naranja Y Negro', 0, false);
