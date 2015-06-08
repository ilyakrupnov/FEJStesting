describe('', function() {
    var d = document.querySelector('.box');

    it('Should has Lalka Class', function() {
        expect(d.classList.contains('lalka')).toBe(true);
    });
});