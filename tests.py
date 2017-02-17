from unittest import TestCase
from server import app

class FlaskTests(TestCase):

    def setUp(self):

        self.client = app.test_client()
        app.config['TESTING'] = True

    def test_route(self):
        """test main route"""

        result = self.client.get("/")
        self.assertEqual(result.status_code, 200)
        self.assertIn('LadyNerds', result.data)

if __name__ == "__main__":
    unittest.main()