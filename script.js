
document.addEventListener("DOMContentLoaded", function() {
    const codes = document.querySelectorAll('.code');
    
    codes.forEach((code, idx) => {
        code.addEventListener('input', (e) => {
            if (e.target.value.length > 0) {
                if (idx < codes.length - 1) {
                    const next = document.querySelector(`#code-${idx + 2}`);
                    if (next) {
                        next.focus();
                        next.classList.add('focused');
                    }
                }
                code.classList.remove('focused');
            }
        });

        code.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !e.target.value) {
                if (idx > 0) {
                    const prev = document.querySelector(`#code-${idx}`);
                    if (prev) {
                        prev.focus();
                        prev.classList.add('focused');
                    }
                }
                code.classList.remove('focused');
            }
        });

        code.addEventListener('focus', () => {
            code.classList.add('focused');
        });

        code.addEventListener('blur', () => {
            code.classList.remove('focused');
        });
    });
});