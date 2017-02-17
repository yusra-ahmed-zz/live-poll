import unittest
import server
from server import app
import server


class IntegrationTests(unittest.TestCase):

    def setUp(self):

        self.client = app.test_client()
        app.config['TESTING'] = True

        app.secret_key = "Livepollpubnub"

    def test_route(self):
        """test main route"""

        result = self.client.get("/")
        self.assertEqual(result.status_code, 200)
        self.assertIn('LadyNerds', result.data)

    def tearDown(self):
        self.browser.quit()

if __name__ == "__main__":
    unittest.main(verbosity=2)
