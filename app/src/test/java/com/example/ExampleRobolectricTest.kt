package com.example

import android.content.Context
import android.net.Uri
import android.webkit.WebResourceRequest
import androidx.test.core.app.ApplicationProvider
import org.junit.Assert.*
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.Robolectric
import org.robolectric.RobolectricTestRunner
import org.robolectric.annotation.Config

@RunWith(RobolectricTestRunner::class)
@Config(sdk = [36])
class ExampleRobolectricTest {

  @Test
  fun `verify app name`() {
    val context = ApplicationProvider.getApplicationContext<Context>()
    val appName = context.getString(R.string.app_name)
    assertEquals("AluCraft", appName)
  }

  @Test
  fun `verify assets are bundled`() {
    val context = ApplicationProvider.getApplicationContext<Context>()
    val assets = listOf(
        "index.html",
        "assets/index-C_ZGULEN.js",
        "assets/index-C4q7B9Zc.css",
        "assets/web-BJ1A2ISL.js",
        "logo.png"
    )
    for (asset in assets) {
      val stream = context.assets.open(asset)
      assertNotNull("Asset $asset should exist", stream)
      val bytes = stream.readBytes()
      assertTrue("Asset $asset should have content", bytes.isNotEmpty())
      stream.close()
    }
  }
}
