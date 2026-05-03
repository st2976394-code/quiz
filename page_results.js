//=========================================
// File name: page_results.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Functions included in this file:
// - ready()
// - on beforeunload
// - GetTypeOfSubstitution() - code generated
// - GetRemFromMark() - code generated
// - GetLinkFromMark() - code generated
//=========================================

$(document).ready(function () {
	PageLoadResult();
});

$(window).on("beforeunload", function ()
{
	if (!closedFromBrowser) {
		PageUnload();
	}
	else {
		ClearQuiz();
	}
});

/* Code generated function */
function GetTypeOfSubstitution(aMark)
{
    if ((aMark>=0)&&(aMark<23)) return QMAKE_VALUATION_NEAR_TO_MARK;
    else if ((aMark>=24)&&(aMark<39)) return QMAKE_VALUATION_NEAR_TO_MARK;
    else if ((aMark>=40)&&(aMark<54)) return QMAKE_VALUATION_NEAR_TO_MARK;
    else if ((aMark>=55)&&(aMark<68)) return QMAKE_VALUATION_NEAR_TO_MARK;
    else if ((aMark>=69)&&(aMark<=80)) return QMAKE_VALUATION_NEAR_TO_MARK;
    else return 0;

}


/* Code generated function */
function GetRemFromMark(aMark)
{
    if ((aMark>=0)&&(aMark<23)) return "NON SUPERATO";
    if ((aMark>=24)&&(aMark<39)) return "INIZIALE";
    if ((aMark>=40)&&(aMark<54)) return "BASE";
    if ((aMark>=55)&&(aMark<68)) return "INTERMEDIO";
    if ((aMark>=69)&&(aMark<=80)) return "AVANZATO";
    return "";

}


/* Code generated function */
function GetLinkFromMark(aMark)
{
    return "";

}



