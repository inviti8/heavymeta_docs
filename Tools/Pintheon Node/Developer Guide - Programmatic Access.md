# Developer Guide: Programmatic Access to Pintheon Node

This guide will walk you through the process of programmatically interacting with a Pintheon node, including generating access tokens and uploading files.

## Prerequisites

1. Python 3.8 or higher installed
2. A running Pintheon node on your local machine (default port: 3000)
3. `requests` library for HTTP requests

## Installation

First, install the required package:

```bash
pip install requests
```

## Step 1: Get an Access Token

To interact with the Pintheon node's API, you'll need an access token. This token is used to authenticate your requests.

### Get Your Access Token

1. Open the Pintheon web interface in your browser
2. Navigate to **Settings** > **Access Tokens**
3. Click **Generate New Token**
4. Copy the generated token - you'll use this in your API requests

For detailed instructions with screenshots, see the [Access Tokens documentation](./Settings.html#access-tokens).

### Security Notes

- Keep your access token secure and never commit it to version control
- Use environment variables to store your token in production
- Rotate your tokens regularly for security
- The access token provides full access to your Pintheon node's API, so treat it like a password

## Step 2: Using the Access Token

Once you have your access token, you can use it to authenticate your API requests to the Pintheon node. The token should be included in the `access_token` parameter of your requests.

## Step 4: Upload a File Programmatically

Now you can use the access token to upload files to your Pintheon node. The Pintheon node provides an API endpoint for file uploads that requires a valid access token.

```python
import requests
import os

# Pintheon node configuration
PINTHEON_API_URL = "https://localhost:9999/api_upload"  # Default API endpoint

# File to upload
file_path = "path/to/your/file.txt"

# Your access token from the Pintheon web interface
# Go to Settings > Access Tokens to generate one
access_token = "your_access_token_here"  # Replace with your actual access token

# 2. Prepare the file upload
try:
    # Open the file in binary mode
    with open(file_path, 'rb') as f:
        # Prepare the multipart form data
        files = {
            'file': (os.path.basename(file_path), f, 'application/octet-stream')
        }
        
        # Required form data
        data = {
            'access_token': access_token,
            'encrypted': 'false'  # Set to 'true' for encrypted uploads
        }
        
        # 3. Make the upload request
        response = requests.post(
            PINTHEON_API_URL,
            files=files,
            data=data,
            verify=False,  # Only for local development with self-signed certs
            timeout=30  # 30 second timeout
        )
        
        # 4. Handle the response
        if response.status_code == 200:
            result = response.json()
            cid = result.get('Hash') or result.get('IpfsHash')
            if cid:
                # Construct the gateway URL
                gateway_url = f"https://your-pintheon-gateway/ipfs/{cid}"
                print(f"File uploaded successfully!")
                print(f"IPFS CID: {cid}")
                print(f"Gateway URL: {gateway_url}")
                
                # The file is now available at the gateway URL
                # You can use this URL to access the file from any IPFS gateway
            else:
                print("Upload successful but no CID returned in response")
                print(f"Response: {response.text}")
        else:
            print(f"Upload failed with status {response.status_code}")
            print(f"Response: {response.text}")
            
except FileNotFoundError:
    print(f"Error: File not found at {file_path}")
except requests.exceptions.RequestException as e:
    print(f"Network error during upload: {e}")
except Exception as e:
    print(f"An unexpected error occurred: {e}")
```

### Important Notes:

1. **Access Token**: The access token is generated fresh for each upload with a short expiration time (5 minutes in this example).

2. **HTTPS**: The example uses HTTPS with certificate verification disabled (`verify=False`), which is only suitable for local development. For production, use proper SSL certificates.

3. **Gateway URL**: Replace `your-pintheon-gateway` with your actual Pintheon node's gateway address.

4. **Error Handling**: The example includes basic error handling, but you may want to enhance it based on your application's needs.

5. **File Size**: For large files, consider implementing progress tracking and chunked uploads.

6. **Security**: Never expose your private key in client-side code. This example is for server-side use only.

## Step 5: Retrieve File Information

You can retrieve information about uploaded files using the Pintheon node's API. Here's how to get file information and access your uploaded files:

```python
def get_file_info(ipfs_cid, pintheon_gateway="your-pintheon-gateway"):
    """
    Retrieve information about an uploaded file using its IPFS CID.
    
    :param ipfs_cid: The IPFS Content Identifier (CID) of the file
    :param pintheon_gateway: The base URL of your Pintheon gateway
    :return: Dictionary containing file information or None on error
    """
    try:
        # Construct the URL to the file on the Pintheon gateway
        file_url = f"https://{pintheon_gateway}/ipfs/{ipfs_cid}"
        
        # Make a HEAD request to get file metadata
        response = requests.head(file_url, allow_redirects=True, timeout=10)
        
        if response.status_code == 200:
            # Extract relevant headers
            file_info = {
                'cid': ipfs_cid,
                'url': file_url,
                'content_type': response.headers.get('Content-Type'),
                'content_length': response.headers.get('Content-Length'),
                'last_modified': response.headers.get('Last-Modified'),
                'etag': response.headers.get('ETag')
            }
            return file_info
        else:
            print(f"Error retrieving file info: {response.status_code}")
            return None
            
    except requests.exceptions.RequestException as e:
        print(f"Network error retrieving file info: {e}")
        return None

# Example usage
if __name__ == "__main__":
    # Replace with an actual CID from your upload
    cid = "QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"
    
    file_info = get_file_info(cid, "your-pintheon-gateway")
    if file_info:
        print("File Information:")
        for key, value in file_info.items():
            print(f"{key}: {value}")
```

### Accessing Your Files

Once uploaded, your files are accessible through any IPFS gateway using the CID returned during upload. The URL format is:

```
https://<pintheon-gateway>/ipfs/<cid>
```

For example, if your Pintheon gateway is `gateway.pintheon.example.com` and your file's CID is `QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco`, the URL would be:

```
https://gateway.pintheon.example.com/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco
```

### Important Notes:

1. **Persistence**: Files are only available as long as they are pinned by your Pintheon node. Make sure to pin important files through the Pintheon web interface or API.

2. **Caching**: The Pintheon gateway may cache files for performance. Changes to a file with the same CID will not be reflected until the cache expires.

3. **Performance**: For large files, consider using a dedicated IPFS client for better performance when retrieving files.

## Error Handling

When working with the Pintheon API, it's important to handle errors gracefully. Here's how to handle common error scenarios:

```python
def upload_file(api_url, file_path, access_token, encrypted=False, timeout=30):
    """
    Upload a file to a Pintheon node with proper error handling.
    
    :param api_url: URL of the Pintheon API endpoint (e.g., 'https://localhost:9999/api_upload')
    :param file_path: Path to the file to upload
    :param access_token: Valid access token for authentication
    :param encrypted: Whether to encrypt the file (True/False)
    :param timeout: Request timeout in seconds
    :return: Tuple of (success: bool, result: dict or str)
    """
    try:
        # Verify file exists and is readable
        if not os.path.isfile(file_path):
            return False, f"File not found: {file_path}"
            
        if not os.access(file_path, os.R_OK):
            return False, f"Permission denied reading file: {file_path}"
        
        # Prepare the request
        with open(file_path, 'rb') as f:
            files = {'file': (os.path.basename(file_path), f, 'application/octet-stream')}
            data = {
                'access_token': access_token,
                'encrypted': str(encrypted).lower()
            }
            
            # Make the request
            response = requests.post(
                api_url,
                files=files,
                data=data,
                verify=False,  # Disable SSL verification for local development
                timeout=timeout
            )
            
            # Handle the response
            if response.status_code == 200:
                try:
                    result = response.json()
                    if 'Hash' in result or 'IpfsHash' in result:
                        return True, result
                    else:
                        return False, f"Unexpected response format: {result}"
                except ValueError:
                    return False, f"Invalid JSON response: {response.text}"
                    
            elif response.status_code == 400:
                return False, f"Bad request: {response.text}"
                
            elif response.status_code == 401:
                return False, "Authentication failed: Invalid or expired access token"
                
            elif response.status_code == 403:
                return False, "Forbidden: Check your token permissions"
                
            elif response.status_code == 413:
                return False, "File too large: Exceeds maximum allowed size"
                
            elif response.status_code == 500:
                return False, f"Server error: {response.text}"
                
            else:
                return False, f"Unexpected status code {response.status_code}: {response.text}
                
    except requests.exceptions.Timeout:
        return False, "Request timed out. The server took too long to respond."
        
    except requests.exceptions.SSLError:
        return False, "SSL certificate verification failed. For development, you can disable verification (not recommended for production)."
        
    except requests.exceptions.ConnectionError:
        return False, "Connection failed. Check if the Pintheon node is running and accessible."
        
    except requests.exceptions.RequestException as e:
        return False, f"Request failed: {str(e)}"
        
    except IOError as e:
        return False, f"File operation failed: {str(e)}"
        
    except Exception as e:
        return False, f"An unexpected error occurred: {str(e)}"
```

### Example Usage with Error Handling

```python
# Example usage of the upload_file function
api_url = "https://localhost:9999/api_upload"
file_path = "path/to/your/file.txt"
access_token = "your_access_token_here"

success, result = upload_file(api_url, file_path, access_token)

if success:
    cid = result.get('Hash') or result.get('IpfsHash')
    print(f"File uploaded successfully! CID: {cid}")
    
    # You can now access the file at:
    gateway_url = f"https://your-pintheon-gateway/ipfs/{cid}"
    print(f"Access your file at: {gateway_url}")
else:
    print(f"Upload failed: {result}")
    
    # Handle specific error cases
    if "Authentication failed" in result:
        print("Please check your access token and try again.")
    elif "Connection failed" in result:
        print("Please ensure the Pintheon node is running and accessible.")
```

### Common Error Scenarios

1. **Authentication Errors (401/403)**
   - Token has expired (generate a new one)
   - Invalid token format
   - Missing required permissions
   - Public key not registered with the node

2. **File Upload Errors**
   - File too large (413)
   - Invalid file format
   - Insufficient disk space on node
   - Network issues during upload

3. **Server Errors (5xx)**
   - Pintheon node service down
   - Database connection issues
   - Internal server errors

## Best Practices

### 1. Token Management

- **Short-Lived Tokens**: Generate tokens with short expiration times (5-15 minutes)
- **Token Storage**: Store tokens securely using environment variables or a secrets management system
- **Token Rotation**: Implement token rotation to automatically refresh tokens before they expire
- **Least Privilege**: Only request the minimum permissions needed for your application

### 2. File Handling

- **File Validation**:
  - Verify file types and sizes before upload
  - Implement virus scanning for user-uploaded content
  - Set reasonable file size limits
  
- **Large Files**:
  - For files > 100MB, consider chunked uploads
  - Implement progress tracking for better user feedback
  - Handle network interruptions gracefully with resume capabilities

### 3. Performance Optimization

- **Connection Pooling**: Reuse HTTP connections for multiple requests
- **Timeouts**: Set appropriate timeouts for all API calls
- **Concurrent Uploads**: For multiple files, use concurrent uploads with thread pools
- **Caching**: Cache frequently accessed files locally when possible

### 4. Security

- **HTTPS**: Always use HTTPS in production
- **Input Validation**: Sanitize all user inputs
- **Error Messages**: Don't expose sensitive information in error messages
- **Rate Limiting**: Implement client-side rate limiting to avoid being throttled

### 5. Monitoring and Logging

- **Request Logging**: Log all API requests and responses (redacting sensitive data)
- **Error Tracking**: Implement comprehensive error tracking
- **Performance Metrics**: Monitor upload/download speeds and failure rates
- **Alerting**: Set up alerts for abnormal conditions (e.g., high error rates)

## Troubleshooting

### 1. Authentication Issues

**Symptoms**:
- HTTP 401 (Unauthorized) or 403 (Forbidden) errors
- "Invalid token" or "Token expired" messages
- "Public key not registered" errors

**Solutions**:
- **Token Expired**: Generate a new access token with `hvym_stellar`
  ```python
  from hvym_stellar import StellarSharedKeyTokenBuilder
  from stellar_sdk import Keypair
  
  # Generate a new token
  sender = Keypair.from_secret("your_secret_key")
  token = StellarSharedKeyTokenBuilder(
      sender=sender,
      receiver_public_key="pintheon_node_public_key",
      token_type="access",
      expires_in=300  # 5 minutes
  )
  new_token = token.serialize()
  ```

- **Public Key Not Registered**:
  1. Get your public key: `print(sender.public_key)`
  2. Register it in the Pintheon web interface under Settings > Access Tokens

- **Insufficient Permissions**:
  - Verify the token was created with the required permissions
  - Check the token's caveats for any restrictions

### 2. Connection Problems

**Symptoms**:
- Connection timeouts
- "Connection refused" errors
- SSL certificate verification failures

**Solutions**:
- **Verify Node Status**:
  ```bash
  # Check if the Pintheon service is running
  docker ps | grep pintheon
  
  # Check service logs
  docker logs pintheon-node
  ```

- **Check Network Connectivity**:
  ```bash
  # Test basic connectivity
  ping your-pintheon-host
  
  # Test port accessibility
  telnet your-pintheon-host 9999
  
  # Test HTTPS connectivity
  curl -v https://your-pintheon-host:9999/api_upload
  ```

- **SSL Certificate Issues**:
  - For development, you can disable SSL verification (not recommended for production):
    ```python
    import requests
    requests.packages.urllib3.disable_warnings()  # Suppress SSL warnings
    
    response = requests.get(
        "https://your-pintheon-host:9999/api_endpoint",
        verify=False  # Disable SSL verification
    )
    ```
  - For production, ensure you have valid SSL certificates configured

### 3. File Upload Problems

**Symptoms**:
- Slow uploads
- Timeout errors
- "File too large" errors
- Corrupted files

**Solutions**:
- **Large Files**:
  - For files > 100MB, implement chunked uploads
  - Increase timeout values:
    ```python
    response = requests.post(
        "https://your-pintheon-host:9999/api_upload",
        files=files,
        data=data,
        timeout=300  # 5 minute timeout
    )
    ```

- **File Size Limits**:
  - Check available disk space on the Pintheon node:
    ```bash
    df -h /path/to/ipfs/storage
    ```
  - Check IPFS repo size and quota:
    ```bash
    ipfs repo stat
    ```

- **Corrupted Files**:
  - Verify file integrity after upload using checksums
  - Implement retry logic for failed uploads

### 4. Performance Issues

**Symptoms**:
- Slow response times
- High CPU/memory usage
- Timeout errors

**Optimizations**:
- **Connection Pooling**:
  ```python
  import requests
  from requests.adapters import HTTPAdapter
  from urllib3.util.retry import Retry
  
  session = requests.Session()
  retry_strategy = Retry(
      total=3,
      backoff_factor=1,
      status_forcelist=[500, 502, 503, 504]
  )
  adapter = HTTPAdapter(max_retries=retry_strategy)
  session.mount("https://", adapter)
  
  # Use this session for all requests
  response = session.post("https://your-pintheon-host:9999/api_upload", files=files, data=data)
  ```

- **Concurrent Uploads**:
  ```python
  from concurrent.futures import ThreadPoolExecutor, as_completed
  
  def upload_file_wrapper(file_path):
      return upload_file(API_URL, file_path, ACCESS_TOKEN)
  
  # Upload up to 5 files concurrently
  with ThreadPoolExecutor(max_workers=5) as executor:
      future_to_file = {
          executor.submit(upload_file_wrapper, file_path): file_path 
          for file_path in file_paths
      }
      
      for future in as_completed(future_to_file):
          file_path = future_to_file[future]
          try:
              success, result = future.result()
              if success:
                  print(f"Uploaded {file_path}: {result.get('Hash')}")
              else:
                  print(f"Failed to upload {file_path}: {result}")
          except Exception as e:
              print(f"Error uploading {file_path}: {str(e)}")
  ```

### 5. Common Error Messages

- **"Invalid access token"**:
  - Generate a new token
  - Ensure the token hasn't expired
  - Verify the token format is correct

- **"Connection refused"**:
  - Check if the Pintheon node is running
  - Verify the host and port are correct
  - Check for firewall rules blocking the connection

- **"Request timed out"**:
  - Increase the timeout value
  - Check network connectivity
  - Verify the node isn't under heavy load

- **"File too large"**:
  - Check the file size limit on the Pintheon node
  - Consider using chunked uploads for large files
  - Verify available disk space on the node

## Next Steps

1. Explore the full API documentation for additional endpoints
2. Implement file encryption for sensitive data
3. Set up automatic token refresh
4. Build a client library for your preferred programming language
