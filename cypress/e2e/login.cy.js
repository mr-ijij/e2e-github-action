describe('Login Test', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('successfully logs in', () => {
        // ユーザー名とパスワードの入力フィールドを見つけて値を入力
        cy.get('input[type="user_name"]').type(Cypress.env('USER_NAME'));
        cy.get('input[type="password"]').type(Cypress.env('PASSWORD'));

        // ログインボタンをクリック
        cy.get('input[type="submit"]').click();

        // ログインに成功したことを確認するためのアサーション
        // 例えば、ダッシュボードページにリダイレクトされることを確認
        cy.url().should('include', '/dashboard');

        // ダッシュボード上に特定のテキストがあることを確認
        cy.contains('Dashboard');
    });
});