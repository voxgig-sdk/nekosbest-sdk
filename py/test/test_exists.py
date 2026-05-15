# ProjectName SDK exists test

import pytest
from nekosbest_sdk import NekosbestSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = NekosbestSDK.test(None, None)
        assert testsdk is not None
