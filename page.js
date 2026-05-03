//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

    var listLeft1;
    var listLeftHtml1;
    var listRight1;
    var orderLeft1;
    var orderRight1;

    var listLeft2;
    var listLeftHtml2;
    var listRight2;
    var orderLeft2;
    var orderRight2;

    var listLeft8;
    var listLeftHtml8;
    var listRight8;
    var orderLeft8;
    var orderRight8;

var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
    InitQuestion7,
    InitQuestion8,
    InitQuestion9,
    InitQuestion10,
    InitQuestion11,
    InitQuestion12,
    InitQuestion13,
    InitQuestion14,
    InitQuestion15,
    InitQuestion16,
);



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft1 = new CreateListLeft1();
    listLeftHtml1 = new CreateListLeftHtml1();
    listRight1 = new CreateListRight1();
    orderLeft1 = new ShuffleMatchingOrder(listLeft1.length);
    orderRight1 = new ShuffleMatchingOrder(listRight1.length);
    var hideLeftDropdown = true;
    var textHtml = CreateMatchingLists(listLeft1, listLeftHtml1, listRight1, orderLeft1, orderRight1, "idDD1", textSelect, hideLeftDropdown);
    $('#matching1').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft1);
    var maxRightSize = GetMaxSizeRightColumn(listRight1);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft1, "idDD1", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft1, "idDD1", hideLeftDropdown);

    listLeft2 = new CreateListLeft2();
    listLeftHtml2 = new CreateListLeftHtml2();
    listRight2 = new CreateListRight2();
    orderLeft2 = new ShuffleMatchingOrder(listLeft2.length);
    orderRight2 = new ShuffleMatchingOrder(listRight2.length);
    var hideLeftDropdown = true;
    var textHtml = CreateMatchingLists(listLeft2, listLeftHtml2, listRight2, orderLeft2, orderRight2, "idDD2", textSelect, hideLeftDropdown);
    $('#matching2').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft2);
    var maxRightSize = GetMaxSizeRightColumn(listRight2);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft2, "idDD2", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft2, "idDD2", hideLeftDropdown);

    listLeft8 = new CreateListLeft8();
    listLeftHtml8 = new CreateListLeftHtml8();
    listRight8 = new CreateListRight8();
    orderLeft8 = new ShuffleMatchingOrder(listLeft8.length);
    orderRight8 = new ShuffleMatchingOrder(listRight8.length);
    var hideLeftDropdown = true;
    var textHtml = CreateMatchingLists(listLeft8, listLeftHtml8, listRight8, orderLeft8, orderRight8, "idDD8", textSelect, hideLeftDropdown);
    $('#matching8').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft8);
    var maxRightSize = GetMaxSizeRightColumn(listRight8);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft8, "idDD8", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft8, "idDD8", hideLeftDropdown);


});

$(window).on("beforeunload", function ()
{
	PageUnload();
	window.scrollTo(0, 0);
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 0;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('7Jjt4YBeKWE=', 359, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1IOTeqzL0Co=', 359, -1000, 1000),DecodeDecimal('9NBLse0zrYw=', 359, -1000, 1000),DecodeDecimal('9NBLse0zrYw=', 359, -1000, 1000));
    question.num = 1;
    question.answers.length = 0;
    question.shortTextQuestion = " Ascolta il dialogo e segna se le affermazioni sono VERE o FALSE.                                       ";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('0WiFdzWwEkI=', 359, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "";
    question.answers.push(answer0);
    choice = GetBooleanChoice(questionIndex,1);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 1);
    valuation = DecodeNumber('1IOTeqzL0Co=', 361, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer(choice, valuation, 1, 0, '');
    answer1.shortTextAnswer = "";
    question.answers.push(answer1);
    choice = GetBooleanChoice(questionIndex,2);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 2);
    valuation = DecodeNumber('nQriykIu8kA=', 363, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer(choice, valuation, 1, 0, '');
    answer2.shortTextAnswer = "";
    question.answers.push(answer2);
    choice = GetBooleanChoice(questionIndex,3);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 3);
    valuation = DecodeNumber('nQriykIu8kA=', 365, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer(choice, valuation, 1, 0, '');
    answer3.shortTextAnswer = "";
    question.answers.push(answer3);
    choice = GetBooleanChoice(questionIndex,4);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 4);
    valuation = DecodeNumber('DxnqMPq44Xc=', 367, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer(choice, valuation, 1, 0, '');
    answer4.shortTextAnswer = "";
    question.answers.push(answer4);
    question.noChoice = noChoice;
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 1;
    var weight = DecodeNumber('a21qgED257E=', 139, 0, 99999);
    var numOfAnswers = 5;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('j50XE9xOfqQ=', 139, -1000, 1000),DecodeDecimal('ewSSut0XSpU=', 139, -1000, 1000),DecodeDecimal('ewSSut0XSpU=', 139, -1000, 1000));
    question.num = 2;
    question.answers.length = 0;
    question.shortTextQuestion = "Ascolta i dialoghi 2 volte :  Abbina ogni dialogo all'immagine corrispondente. Attenzione : c'è un immagine in più.    ";
    question.noChoice = false;
    for (i = 0; i < orderLeft1.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD1", i);
        choice[1] = GetSelextedItemRight("idDD1", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft1.length; j++)
        {
            if (listLeft1[j] === choice[0])
            {
                valuation.push(listRight1[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 2;
    var weight = DecodeNumber('ILxnTVRPjGw=', 703, 0, 99999);
    var numOfAnswers = 5;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2Eq5CQRwtQI=', 703, -1000, 1000),DecodeDecimal('Aapu/KUTIAw=', 703, -1000, 1000),DecodeDecimal('Aapu/KUTIAw=', 703, -1000, 1000));
    question.num = 3;
    question.answers.length = 0;
    question.shortTextQuestion = "Leggi gli annunci e abbina ogni immagine al testo corretto :  1         2        3        4          5  ";
    question.noChoice = false;
    for (i = 0; i < orderLeft2.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD2", i);
        choice[1] = GetSelextedItemRight("idDD2", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft2.length; j++)
        {
            if (listLeft2[j] === choice[0])
            {
                valuation.push(listRight2[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 3;
    var weight = DecodeNumber('8fPenPw2NBU=', 713, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('S5qfmlQcbpM=', 713, -1000, 1000),DecodeDecimal('ILxnTVRPjGw=', 713, -1000, 1000),DecodeDecimal('ILxnTVRPjGw=', 713, -1000, 1000));
    question.answers.length = 0;
    question.num = 4;
    question.isSingleAns = true;
    question.shortTextQuestion = "Per istruire i cittadini il Comune ha distribuito un calendario che indica i giorni del ritiro dei rifiuti e che spiega come separare i rifiuti riciclabili (carta, vetro, plastica e organico). Ecco alcune istruzioni: Carta e cartone: giornali, libri e fogli vari; scatole per alimenti (pasta, sale, ecc.). Si ritirano il sabato mattina. Plastica e polistirolo: confezioni con i simboli: PET, PE, PVC, PS, PP; polistirolo; bottiglie per acqua, bibite, detersivi; confezioni per alimenti (uova, yogurt). Si ritirano il sabato mattina, nei sacchi gialli trasparenti. Vetro e lattine: bottiglie e bicchieri in vetro, scatolette in alluminio. Si ritirano il martedì mattina, nel secchio. Organico: scarti di cibo, frutta e verdura; pane vecchio; tovaglioli e fazzoletti di carta. Si ritirano il lunedì mattina, nel secchio. Indifferenziato: gomma e giocattoli, CD, video, posate di plastica, ceramica rotta, lampadine, pannoloni e pannolini. Si ritirano il giovedì mattina, nei sacchi grigi trasparenti.  ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('S5qfmlQcbpM=', 715, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bViSWrbrcPo=', 717, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('bViSWrbrcPo=', 719, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 4;
    var weight = DecodeNumber('TEytKRzFhOQ=', 723, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('RqJez0D/Qtw=', 723, -1000, 1000),DecodeDecimal('bh93pXbxfhI=', 723, -1000, 1000),DecodeDecimal('bh93pXbxfhI=', 723, -1000, 1000));
    question.answers.length = 0;
    question.num = 5;
    question.isSingleAns = true;
    question.shortTextQuestion = "Il simbolo PET indica che :";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('RqJez0D/Qtw=', 725, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6foKMnnOJ1Y=', 727, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('6foKMnnOJ1Y=', 729, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 5;
    var weight = DecodeNumber('H8tY/6svRUk=', 569, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jyN86kQrraE=', 569, -1000, 1000),DecodeDecimal('aBnwuOodPhw=', 569, -1000, 1000),DecodeDecimal('aBnwuOodPhw=', 569, -1000, 1000));
    question.answers.length = 0;
    question.num = 6;
    question.isSingleAns = true;
    question.shortTextQuestion = "Il cartone:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('svG+zpMgEMU=', 571, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('svG+zpMgEMU=', 573, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('IAIezrQgSYA=', 575, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 6;
    var weight = DecodeNumber('LQsksHYA9XY=', 579, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('uHofc4D95r8=', 579, -1000, 1000),DecodeDecimal('PSQVOOH8icQ=', 579, -1000, 1000),DecodeDecimal('PSQVOOH8icQ=', 579, -1000, 1000));
    question.answers.length = 0;
    question.num = 7;
    question.isSingleAns = true;
    question.shortTextQuestion = "I fazzoletti di carta si gettano:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('uHofc4D95r8=', 581, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('njwU7j6WuQ0=', 583, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kCKyh/eRwsA=', 585, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 7;
    var weight = DecodeNumber('TP8cztXYiqQ=', 589, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('sj7EK6U97hM=', 589, -1000, 1000),DecodeDecimal('15vsLJVaMOg=', 589, -1000, 1000),DecodeDecimal('15vsLJVaMOg=', 589, -1000, 1000));
    question.answers.length = 0;
    question.num = 8;
    question.isSingleAns = true;
    question.shortTextQuestion = "Il martedì mattina si ritirano:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('sj7EK6U97hM=', 591, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QHMAVIFoFf4=', 593, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5bEibcYlh0M=', 595, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 8;
    var weight = DecodeNumber('wFkWZlGUQl0=', 599, 0, 99999);
    var numOfAnswers = 4;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UJEELr63ofY=', 599, -1000, 1000),DecodeDecimal('TKljxs+PV78=', 599, -1000, 1000),DecodeDecimal('TKljxs+PV78=', 599, -1000, 1000));
    question.num = 9;
    question.answers.length = 0;
    question.shortTextQuestion = "Scegli per ogni domanda la risposta corretta :";
    question.noChoice = false;
    for (i = 0; i < orderLeft8.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD8", i);
        choice[1] = GetSelextedItemRight("idDD8", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft8.length; j++)
        {
            if (listLeft8[j] === choice[0])
            {
                valuation.push(listRight8[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 9;
    var weight = DecodeNumber('YBnY0WJPJ2c=', 250, 0, 99999);
    var numOfAnswers = 6;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2OT+mJ1lCDQ=', 250, -1000, 1000),DecodeDecimal('/Q2M6QjPJ7k=', 250, -1000, 1000),DecodeDecimal('/Q2M6QjPJ7k=', 250, -1000, 1000));
    question.num = 10;
    question.answers.length = 0;
    question.shortTextQuestion = "Completa il testo inserendo le vocali mancanti   ";
    question.noChoice = false;
    choice = $('#idGap10_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('RCnCxoWkxOM='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap10_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('M4AhM/3iGQM='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap10_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('RCnCxoWkxOM='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap10_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('PYaSNnCe5RI='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    choice = $('#idGap10_4').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('RCnCxoWkxOM='));
    var answer4 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer4);
    choice = $('#idGap10_5').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('PYaSNnCe5RI='));
    var answer5 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 10;
    var weight = DecodeNumber('EDMF6P+sZSg=', 814, 0, 99999);
    var numOfAnswers = 6;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('6rrsUmT8IRM=', 814, -1000, 1000),DecodeDecimal('a/lNXIe3Y/I=', 814, -1000, 1000),DecodeDecimal('a/lNXIe3Y/I=', 814, -1000, 1000));
    question.num = 11;
    question.answers.length = 0;
    question.shortTextQuestion = "Completa le frasi con i verbi tra parentesi al presente indicativo: Es: - Quanti anni hai? - Ho 35 anni. (avere) ";
    question.noChoice = false;
    choice = $('#idGap11_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('QFfOP1jov8Y='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap11_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('H/arV1piiro='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap11_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('QT4UcArscak='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap11_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('iwsl/eQnhSo='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    choice = $('#idGap11_4').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('wefxYwEyCPY='));
    var answer4 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer4);
    choice = $('#idGap11_5').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('YPjqkXqbuUs='));
    var answer5 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 11;
    var weight = DecodeNumber('M43dI1mGGew=', 1019, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KDW8Y55eg5c=', 1019, -1000, 1000),DecodeDecimal('2phwJjfcf2E=', 1019, -1000, 1000),DecodeDecimal('2phwJjfcf2E=', 1019, -1000, 1000));
    question.num = 12;
    question.answers.length = 0;
    question.shortTextQuestion = "Completa i dialoghi con le seguenti  parole o espressioni mancanti buona giornata - buone vacanze - e lei - come sta - benissimo";
    question.noChoice = false;
    choice = $('#idGap12_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('aQ9NaW9ms+A='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap12_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('mwQvFFSssTA='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap12_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('eXUAXufq6osBh30L'));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap12_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('l6zEDNXZvHFM23Vz5qz8+w=='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    choice = $('#idGap12_4').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('lE/w28obKLOUpyH5OkGPlQ=='));
    var answer4 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 12;
    var weight = DecodeNumber('SkOngl88jNk=', 388, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QGr4VHHCgvY=', 388, -1000, 1000),DecodeDecimal('beAqTK1kIY8=', 388, -1000, 1000),DecodeDecimal('beAqTK1kIY8=', 388, -1000, 1000));
    question.answers.length = 0;
    question.num = 13;
    question.isSingleAns = true;
    question.shortTextQuestion = "Amina: \"Sono nata in Italia ma i miei genitori sono marocchini, parlo perfettamente l'arabo e l'italiano; vorrei aiutare i nuovi immigrati nella loro vita in Italia\".";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('QGr4VHHCgvY=', 390, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UC4AbCCf3LA=', 392, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UC4AbCCf3LA=', 394, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('AuG0zkA3Fpc=', 396, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 13;
    var weight = DecodeNumber('RzXuVDZl74c=', 235, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HEbCswezkiU=', 235, -1000, 1000),DecodeDecimal('ECzPVqg/zVU=', 235, -1000, 1000),DecodeDecimal('ECzPVqg/zVU=', 235, -1000, 1000));
    question.answers.length = 0;
    question.num = 14;
    question.isSingleAns = true;
    question.shortTextQuestion = "Rachid: \"La mia passione sono i computer; quando i miei amici hanno dei problemi con il loro computer o con la posta elettronica, mi chiamano e io trovo la soluzione, quasi sempre\".";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('HEbCswezkiU=', 237, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4N5BwaX51QY=', 239, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('IUdb9Jk8WsY=', 241, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('oj1PHR0y0p0=', 243, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 14;
    var weight = DecodeNumber('4fAisQpf9WA=', 245, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('heY1y4z67p8=', 245, -1000, 1000),DecodeDecimal('zDGZ/ie1Chc=', 245, -1000, 1000),DecodeDecimal('zDGZ/ie1Chc=', 245, -1000, 1000));
    question.answers.length = 0;
    question.num = 15;
    question.isSingleAns = true;
    question.shortTextQuestion = "Gianna: \"Mi piacerebbe aiutare le persone malate, amo essere utile e non ho paura delle responsabilità\".";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('heY1y4z67p8=', 247, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zI00AxEsSzw=', 249, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YBnY0WJPJ2c=', 251, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('YBnY0WJPJ2c=', 253, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 15;
    var weight = DecodeNumber('iyBzAU0D8bU=', 255, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Ia775w5cGQc=', 255, -1000, 1000),DecodeDecimal('KxYb7Tkj1+A=', 255, -1000, 1000),DecodeDecimal('KxYb7Tkj1+A=', 255, -1000, 1000));
    question.answers.length = 0;
    question.num = 16;
    question.isSingleAns = true;
    question.shortTextQuestion = "Matteo: \"Odio stare chiuso a casa, a scuola o in un ufficio; mi piacerebbe stare nei campi, in mezzo alla natura\".";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('//eOPlXJO+E=', 257, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('//eOPlXJO+E=', 259, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rIRPdb+tFsU=', 261, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('2X8x/Plg5I0=', 263, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}


/* Code generated function */
function ClearQuestion1()
{
    const questionIndex = 0;
    ClearBooleanChoice(questionIndex,0);
    ClearBooleanChoice(questionIndex,1);
    ClearBooleanChoice(questionIndex,2);
    ClearBooleanChoice(questionIndex,3);
    ClearBooleanChoice(questionIndex,4);

}
/* Code generated function */
function ClearQuestion2()
{
    ClearMatching("idDD1", 0);
    ClearMatching("idDD1", 1);
    ClearMatching("idDD1", 2);
    ClearMatching("idDD1", 3);
    ClearMatching("idDD1", 4);

}
/* Code generated function */
function ClearQuestion3()
{
    ClearMatching("idDD2", 0);
    ClearMatching("idDD2", 1);
    ClearMatching("idDD2", 2);
    ClearMatching("idDD2", 3);
    ClearMatching("idDD2", 4);

}
/* Code generated function */
function ClearQuestion4()
{
    const questionIndex = 3;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion5()
{
    const questionIndex = 4;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion6()
{
    const questionIndex = 5;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion7()
{
    const questionIndex = 6;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion8()
{
    const questionIndex = 7;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion9()
{
    ClearMatching("idDD8", 0);
    ClearMatching("idDD8", 1);
    ClearMatching("idDD8", 2);
    ClearMatching("idDD8", 3);

}
/* Code generated function */
function ClearQuestion10()
{
    ClearFillTheGap(10,0);
    ClearFillTheGap(10,1);
    ClearFillTheGap(10,2);
    ClearFillTheGap(10,3);
    ClearFillTheGap(10,4);
    ClearFillTheGap(10,5);

}
/* Code generated function */
function ClearQuestion11()
{
    ClearFillTheGap(11,0);
    ClearFillTheGap(11,1);
    ClearFillTheGap(11,2);
    ClearFillTheGap(11,3);
    ClearFillTheGap(11,4);
    ClearFillTheGap(11,5);

}
/* Code generated function */
function ClearQuestion12()
{
    ClearFillTheGap(12,0);
    ClearFillTheGap(12,1);
    ClearFillTheGap(12,2);
    ClearFillTheGap(12,3);
    ClearFillTheGap(12,4);

}
/* Code generated function */
function ClearQuestion13()
{
    const questionIndex = 12;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion14()
{
    const questionIndex = 13;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion15()
{
    const questionIndex = 14;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion16()
{
    const questionIndex = 15;
    ClearSingleAnswerChoices(questionIndex);

}


/* Code generated function */
function CreateListLeft1()
{
    this.length = 5;
    this[0] = 'Associazione 1';
    this[1] = 'Associazione 2';
    this[2] = 'Associazione 3';
    this[3] = 'Associazione 4';
    this[4] = 'Associazione 5';

}

/* Code generated function */
function CreateListRight1()
{
    this.length = 5;
    this[0] = unescape(DecodeString("erYwcJ8545s="));
    this[1] = unescape(DecodeString("8UeBIERXvjg="));
    this[2] = unescape(DecodeString("cfskFSbrKHY="));
    this[3] = unescape(DecodeString("Yct5e2ZzFlI="));
    this[4] = unescape(DecodeString("qulDmftkAPA="));

}

/* Code generated function */
function CreateListLeftHtml1()
{
    this.length = 5;
    this[0] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">DIALOGO 1</span></p></span>';
    this[1] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">DIALOGO </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">2</span></p></span>';
    this[2] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">DIALOGO </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">3</span></p></span>';
    this[3] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">DIALOGO </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">4</span></p></span>';
    this[4] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">DIALOGO </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">5</span></p></span>';

}

/* Code generated function */
function CreateListLeft2()
{
    this.length = 5;
    this[0] = 'Associazione 1';
    this[1] = 'Associazione 2';
    this[2] = 'Associazione 3';
    this[3] = 'Associazione 4';
    this[4] = 'Associazione 5';

}

/* Code generated function */
function CreateListRight2()
{
    this.length = 5;
    this[0] = unescape(DecodeString("sWbfopV+zwqfb61TWTQJEwvU5roB45s/5k+8iN3xByIRE2JHGlGn6Z6cjcWzQS8sE9ipAsqcj1Q="));
    this[1] = unescape(DecodeString("BZXMaU0wRB04e76UPxL11jElESFCnHLFa556xtiNfKJRxjwytSnVE4TpI3d7OkIA9A+JZ8Q9lfXAGtQfCiMJEViTCXsd5TI7IKblTor8VSs="));
    this[2] = unescape(DecodeString("EJM0RTWlRnhNZEg+gQGt9nPB+4i5rMU+TnWWJCzANtqEsHoAoZbmXYrHOUZm2h+d4UYxBFf78qbJ5aWpARB1e1s6pdmH2rTJcO8+pSanNDg="));
    this[3] = unescape(DecodeString("ea2RMPqJYIr1TpSEISy7kSDJQNM9mua02YfS/V9ek25lqW4WPryFfR5pnRuB4bGXZngp9GkU3yVSXT1Gu5gQAu6I6pP2thEJmNGicTmJdwqU6+cU"));
    this[4] = unescape(DecodeString("qyL0oJ9zd605Q961feoGJeZicnk4oNmCQkYZCaxwTdqys0gVST9B26GquyOw7zPPWbdHpYm6apnzyf3Q7SlTDmyz5DCq9wSqY1yNxTfELyGSp0w6"));

}

/* Code generated function */
function CreateListLeftHtml2()
{
    this.length = 5;
    this[0] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">IMMAGINE 1</span></p></span>';
    this[1] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Microsoft Sans Serif;font-size:8pt;\">IMMAGINE 2</span></p></span>';
    this[2] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Microsoft Sans Serif;font-size:8pt;\"> IMMAGINE 3</span></p></span>';
    this[3] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Microsoft Sans Serif;font-size:8pt;\">IMMAGINE 4</span></p></span>';
    this[4] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Microsoft Sans Serif;font-size:8pt;\">IMMAGINE 5</span></p></span>';

}

/* Code generated function */
function CreateListLeft8()
{
    this.length = 4;
    this[0] = 'Associazione 1';
    this[1] = 'Associazione 2';
    this[2] = 'Associazione 3';
    this[3] = 'Associazione 4';

}

/* Code generated function */
function CreateListRight8()
{
    this.length = 4;
    this[0] = unescape(DecodeString("AaKXXfHednrxqX4L"));
    this[1] = unescape(DecodeString("usw0igaGzlo="));
    this[2] = unescape(DecodeString("/G9MyEzWNn5ivNrhGjbOvpxkVrB57lcs3MrkcNvzMGw="));
    this[3] = unescape(DecodeString("2vAc08CiNDWquQa+ZNVbiA=="));

}

/* Code generated function */
function CreateListLeftHtml8()
{
    this.length = 4;
    this[0] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Vuole bere qualcosa?</span></p></span>';
    this[1] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Quanto costa questa bottiglia di vino?</span></p></span>';
    this[2] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Dov&#39;&#232; il libro di grammatica?</span></p></span>';
    this[3] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Che lavoro fa tua madre?</span></p></span>';

}





