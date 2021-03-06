var app = app || {};

(function() {
    app.router = Sammy(function () {
        var selector = '#wrapper';

        this.get('#/', function(){
            var html = '<section>' +
                            '<article>Ние, хората, сме свикнали да възприемаме себе си като върха или крайната точка на еволюцията на нашата планета. През последните десетилетия по изумителен начин ускоряваме развитието на технологиите. С помощта на стремително напредващите иновации всеки от нас има достъп до колосални обеми от информация и огромно разнообразие от ресурси. Човекът обаче често приема за даденост всичко, което вижда. Толкова бързо живота ни се промени, вследствие на тази еволюция, че изобщо не се замисляме в каква посока ще ни отведе тя. Стивън Хокинг предупреждава, че това може да е и най-голямата грешка на човечеството (може би и последната). Според Хокинг „досегашните успехи са нищо в сравнение с това, което ни очаква в близките десетилетия”. Всички учени са категорични, че рано или късно развитието на технологиите ще създаде изкуствен интелект, който ще оспори нашето човешко първенство.' +
                            '</article>' +
                        '</section>' +
                        '<aside>' +
                            '<img src="images/AI-person-fixedBackground.jpg" alt="artificial intelligence and person">' +
                        '</aside>';
            $(selector).html(html);
        });

        this.get('#/watson', function(){
            var html = '<section>' +
                            '<article>“Уотсън” - суперкомпютърът, дело на IBM е една от аналитичните машини, чиито пробиви през последните години дават храна за размисъл на специалистите по изкуствен интелект. “Уотсън” е много повече от математически инструмент или просто  алгоритъм - “Уотсън”  е способен да се учи сам и обработва с огромна скорост колосални масиви от информация. “Уотсън” побеждава хора в американска телевизионна викторина, създава кулинарни рецепти и изчислява вероятността определени хора да развият заболяване при генетично предразположение.</article>' + '<div id="video"><iframe width="720" height="405" src="https://www.youtube.com/embed/_Xcmh1LQB9I" frameborder="0" allowfullscreen></iframe></div>' +
                        '</section>' +
                '<aside>' +
                '<img src="images/Watson-Avatar.png" alt="watson avatar">' +
                '</aside>';
            $(selector).html(html);
        });

        this.get('#/danger', function(){
            var html = '<section>' +
                            '<article><p>През юли 2015 г. над 1000 водещи изследователи в областта на роботиката и изкуствения интелект подписаха отворено писмо, в което предупредиха за опасността от употребата на изкуствен интелект за военни цели и автономни оръжия. Сред подписалите личности са основателя на “Тесла” Елон Мъск, съоснователя на “Apple” Стив Возняк и Стивън Хокинг. </p><p><a href="http://futureoflife.org/open-letter-autonomous-weapons/" target="_blank">Имате възможност да прочетете и подкрепите отвореното писмо на този линк.</a></p> <p>Фундаменталният въпрос е: как можем да измерим точно колко умни са машините, така че да ги съпоставим със собствения ни мозък и логичното последствие дали и кога ще дойде моментът, когато изкуственият интелект би могъл да се превърне от помощник в опасност, от служител в господар.</p>' +
                            '</article>' +
                        '</section>' +
                '<aside>' +
                '<img src="images/MQ-9_Reaper_taxis.jpg" alt="MQ-9 Reaper">' +
                    '<div>Безпилотния военен дрон MQ-9 Reaper може да изпълнява автономни летателни операции</div>' +
                '</aside>';
            $(selector).html(html);
        });

        this.get('#/games', function(){
            var html = '<section>' +
                '<article>Една от най-обективните форми за оценка са игрите. Още през далечната 1997 година “Дийп блу” победи тогавашния шампион по шах Гари Каспаров. Тогава за първи път машина триумфира над най-добрия в тази интелектуална надпревара. Оттогава нещата се развиват още по-бързо. Преди време изкуственият интелект “Алфа Гоу” победи в играта Го световният шампион Фан Уей. Го е стратегическа надпревара, сходна по логика с шаха, която е позната в Древен Китай от поне 4 хилядолетия. Тя има прости правила, но всъщност е многократно по-сложна от шахмата. Това е демонстрация, че все по-успешно компютърът може да бъде научен да мисли.' +
                '</article>' +
                '</section>' +
                '<aside>' +
                '<img src="images/deep-blue-kasparov.jpg" alt="Deep Blue vs Kasparov chess">' +
                '<div>“Дийп блу” vs. Гари Каспаров</div>' +
                '</aside>';
            $(selector).html(html);
        });

        this.get('#/singularity', function(){
            var html = '<section>' +
                '<article>В началото на 50-те години Фон Нойман пише, че “постоянно ускоряващият се напредък на технологиите и промените в начина на живот на човека създава впечатлението, че наближава някаква принципна сингулярност в историята на вида, отвъд която човешките дела не биха могли да продължават такива, каквито ги познаваме”. Технологичната сингулярност е моментът, в който скоростта на забързване на техническото усъвършенстване ще стигне до точка, в която се случва безкрайно бързо. От този етап животът, такъв какъвто го познаваме, ще спре да съществува и няма как да сме сигурни какво ще се случи отвъд границата. Учените намират доказателства и в двете посоки - че компютрите ще сметнат хората за излишни и ще се лишат от тях, или че вече ще получим толкова съвършен съюзник - интелект, с чиято помощ ще имаме възможност да решаваме вечни въпроси, да открием невероятни неща във всички области на науката. Рей Кърцуайл “планира” този момент на технологичната сингулярност за 2045 година.' +
                'Развитието на компютрите не е линейно, а експоненциално - всяка следваща стъпка идва многократно по-бързо от предходната. Само за първите 14 години на новото хилядолетие човечеството е напреднало технологично толкова, колкото през целия XX век. А до 2021 г. ще напредне още веднъж по толкова. В един момент скоростта ще стане безкрайна, ще стигнем до технологичната сингулярност.' +
                '</article>' + '<img src="images/tech-singularity.jpg" alt="Technology Singularity" id="singularity">' +
                '</section>' +
                    '<aside>' +
                '<img src="images/Technology-Singularity.png" alt="Technology Singularity">' +
                    '</aside>';
            $(selector).html(html);
        });
        
        this.get('#/links', function () {
            var html = '<div><a href="http://www.cleverbot.com/" target="_blank">Cleverbot</a> - Chat with a bot about anything and everything - AI learns from people, in context, and imitates.</div>' + '<div><a href="https://www.kaldata.com/IT-%D0%9D%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8/%D0%97%D0%B0%D0%BF%D0%BE%D0%B7%D0%BD%D0%B0%D0%B9%D1%82%D0%B5-%D1%81%D0%B5-%D1%81-Jiajia-%D0%BF%D1%8A%D1%80%D0%B2%D0%B8%D1%8F%D1%82-%D0%BA%D0%B8%D1%82%D0%B0%D0%B9%D1%81%D0%BA%D0%B8-%D1%85%D1%83%D0%BC%D0%B0-109903.html" target="_blank">Запознайте се с Jia Jia - първият китайски хуманоиден робот</a></div>';
            $(selector).html(html);
        });

        this.get('#/comments', function () {
            var html = '<div>Споделете вашето мнение относно изкуствения интелект:</div>' + '<div id="form"><input type="text" name="author" id="author" placeholder="Име" size="45"><br><input type="text" name="body" id="body" placeholder="Коментар" size="45"></br><button onclick="addComment()">Добави</button></div>' + '<div id="comments"></div>';
            $.ajax({
                url: "https://baas.kinvey.com/appdata/kid_-JFaNur4Zb/comments",
                type: "GET",
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("Authorization", "Basic c3RlbGlhbjoxMjM0");
                },
                success: function(data){
                    var container = $("#comments");
                    for (var index in data) {
                        var text = data[index].body + ", Автор: " + data[index].author + ", Дата: " + data[index].date;
                        container.append($("<div id='comment'>").text(text));
                        container.append($('<br>'));
                    }
                },
                error: function(err){
                    console.log(err);
                }
            });
            $(selector).html(html);
        })
    });

    app.router.run('#/');
}());

function addComment() {
    var author = $('#author').val();
    var body = $('#body').val();

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }

    today = mm+'/'+dd+'/'+yyyy;

    $.ajax({
        url: "https://baas.kinvey.com/appdata/kid_-JFaNur4Zb/comments",
        type: "POST",
        data: {"author":author,"body":body,"date":today},
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic c3RlbGlhbjoxMjM0");
        },
        success: function(data){
            console.log(data);
            location.reload();
        },
        error: function(err){}
    })
}