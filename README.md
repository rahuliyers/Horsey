# Horsey
 Horsey is a Dropbox extension for Safari that allows you to copy almost any file on the web directly to your Dropbox account without having to download it your device first

## What does this do ?

This extension allows you to save almost any file on the web to your Dropbox account without having to download it first, saving you time and %50 bandwidth.

## Why is this useful ?

By copying a file directly from a website to your Dropbox account, without having to download it to you computer first, you're doing two things:

First:
You're saving %50 of your Bandwidth, since the file is copied directly to your Dropbox account online. And from your Dropbox account to your computer.

Second:
You're saving time. Instead of downloading a file to your computer via HTTP (slow) and then uploading it to Dropbox (slow), the file is copied directly to your Dropbox account online from the website. When dropbox copies a file from your account online to your computer you get several benefits such as the download resuming, as well as any speed benefits that Dropbox may offer by optimising its protocols in downloading files to your computer.

## Why did you create this ?

I was trying to download massive satellite imagery (each image running into Gigabytes) from NASA, but as the files were huge, and the servers located in the US (I was in India), the downloads would time out before they would finish.

Then it occurred to me that Dropbox probably had servers in the US which could download the files from NASA much faster than I could, because they were close by. Once they were in my Dropbox account online, I wouldn't have to worry about the download timing out, because Dropbox uses its own protocol for synchronising files between the cloud and my computer and resumes downloads as and when it gets the chance. Each download from NASA would take me over two days before eventually it would timeout, so I decided to try using the Dropbox API to solve this problem.

## How well did it work ?

It worked great!! Without using this extension, trying to download the files in question would take over two days before timing out. With the extension the download would get copied into my Dropbox account and onto my computer in a fraction of the time.

The best part was, unlike browser downloads, which require you to keep your computer awake and connected to the internet until the download completed, this method didnt require you to remain online once you initiated the download. The download would happen directly between the website hosting the file, and Dropbox, so you could close your computer / disconnect / do whatever you like without bothering about the download completing. Once Dropbox had copied the file, it would quietly copy it into your Dropbox folder on your devices in the background.

## How do you use it ?

The extension adds options to Safari's context menu. You open the context menu on the link / file you want to save to Dropbox, and select the option to save to Dropbox. If you are not logged in, it opens a browser window on Dropbox's website to let you log in. Within the browser window you then select or create the folder in your Dropbox account where you want to save the file, and begin the download. If you want, you could watch a progress bar showing you how much of the file has been copied into Dropbox in the cloud. Or you could close the window immediately and forget about it! Once Dropbox had it in its account it would quietly synchronise it with all your devices in the background.

## What happened next ?

I submitted the extension to Apple's Safari Extension Gallery. It was accepted and available to anyone to use.

## What is it's status now ?

It is no longer maintained. Apple closed the Safari Extension Gallery when merging its developer programs. Dropbox modified their API so the behaviour which allowed this functionality was no longer supported, so I stopped  maintaining the extension.

## Is there some way to get the same functionality again ?

You should check the latest version of the Dropbox API to see if they support this kind of behaviour (I used the Saver api), or see if there are any other extensions for your favorite browser which allow you to accomplish the same behavior.
