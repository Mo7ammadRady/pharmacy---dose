const translations = {
    en: {
        title: "Pharmacy Dose Printer",
        doseLabel: "Dose:",
        printButton: "Print Dose"
    },
    ar: {
        title: "طابعة الجرعات في الصيدلية",
        doseLabel: "الجرعة:",
        printButton: "طباعة الجرعة"
    }
};

let currentLanguage = 'en';

function changeLanguage(lang) {
    currentLanguage = lang;
    updateTexts();
}

function updateTexts() {
    const elements = ['title', 'doseLabel', 'printButton'];
    elements.forEach(id => {
        document.getElementById(id).textContent = translations[currentLanguage][id];
    });
}

document.getElementById('doseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dose = document.getElementById('dose').value;

    document.getElementById('printDose').textContent = dose;

    const printContent = document.getElementById('printDose').outerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
});

// Initialize with default language
updateTexts();
