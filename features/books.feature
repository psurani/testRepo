Feature: Filtering books

    Scenario: Filter the book from book store
        Given I have the following books in the store
            | title     | Author      |
            | The Devil | Erik Larson |
            | The Lion  | C.S. Lewis  |
            | The Beast | Erik Larson |
        When I filter books by author 'Erik Larson'
        Then I find 2 books